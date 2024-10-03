import EventEmitter from "$/EventEmitter";
import { ClientEventMap, ClientEvents, ClientSetup, Events } from "#/Client";
import ws from "ws";
import { GatewayEvents, GatewayPayload, OpCode } from "#/Socket";
import Logger from "$/Logger";
import { Types } from "#/APITypes";
import Message from "$/Message";

export default class Client extends EventEmitter<ClientEvents> {
  public self?: Types.Client;
  public logger: Logger;

  private _settings: ClientSetup;
  private _identified = false;
  private ws?: ws.WebSocket;
  private _token?: string;

  private seq: number | null = null; // last gateway sequence number
  private resumeGatewayUrl?: string = undefined;
  private sessionType?: string = undefined;
  private sessionId?: string = undefined;

  private heartbeatInterval?: number = undefined;
  private static gateway = "wss://gateway.discord.gg/?v=10&encoding=json";

  constructor(clientSetup: ClientSetup) {
    super();
    this.logger = new Logger(clientSetup);
    this._settings = clientSetup;
  }

  //<editor-fold desc="Public Methods">
  login(token: string) {
    this._token = token;
    if (!this.ws) this.ws = new ws.WebSocket(Client.gateway);

    if (this.self) return console.log(`Bot is already online!`);

    this.ws.on("open", () => {
      if (!this._identified) {
        this.ws?.send(
          JSON.stringify({
            op: OpCode.Identify,
            d: {
              token,
              intents: this.createBitfield(this._settings.intents),
              properties: {
                $os: "linux",
                $browser: "typecord",
                $device: "typecord",
              },
            },
          }),
        );
        this._identified = true;
      }
    });

    this.ws.on("close", () => {
      console.log("Connection closed!");
    });

    this.ws.on("message", (data) => {
      const payload = JSON.parse(data.toString()) as GatewayPayload;

      this.seq = payload?.d?.seq || (payload as any)?.s || this.seq || null;
      this.heartbeatInterval = this.heartbeatInterval
        ? this.heartbeatInterval
        : payload?.d?.heartbeat_interval || null;

      if (payload.op == OpCode.Heartbeat)
        this.ws?.send(JSON.stringify({ op: OpCode.Heartbeat, d: null }));
      if (payload.op === OpCode.Hello) {
        this.emit(Events.Client.Hello, payload);
        this.sendHeartbeat();
        setInterval(() => {
          this.sendHeartbeat();
        }, this.heartbeatInterval);
      }

      if (payload.op === OpCode.HeartbeatAck) return;

      if (payload.t == GatewayEvents.Ready) {
        this.self = payload.d;

        this.resumeGatewayUrl = this.self?.resume_gateway_url;
        this.sessionType = this.self?.session_type;
        this.sessionId = this.self?.session_id;

        this.emit(Events.Client.Ready, this.self);
      } else if (payload.t == GatewayEvents.MessageCreate) {
        this.emit(Events.Message.Create, new Message(payload.d));
      } else {
        const event = ClientEventMap[payload.t as GatewayEvents];

        this.emit(event, payload.d);
      }
    });
  }

  public restart() {
    return new Promise((resolve, reject) => {
      if (!this.resumeGatewayUrl || !this._token)
        reject("No resume gateway url or token found!");

      this.self = undefined;
      this._identified = false;

      this.ws?.close();
      // @ts-ignore
      this.ws = new ws.WebSocket(this.resumeGatewayUrl);
      this.ws.send(
        JSON.stringify({
          op: OpCode.Resume,
          d: {
            token: this._token,
            session_id: this.sessionId,
            seq: this.seq,
          },
        }),
      );
      // @ts-ignore
      this.login(this._token);
      resolve("Bot restarted!");
    });
  }

  //</editor-fold>

  //<editor-fold desc="Private Methods">
  private readonly createBitfield = (bits: Array<bigint>): number =>
    Number(bits.reduce((acc, bit) => acc | bit, 0n));

  private readonly sendHeartbeat = () => {
    this.logger.debug(`Sending heartbeat with sequence number: ${this.seq}`);
    this.ws?.send(JSON.stringify({ op: OpCode.Heartbeat, d: this.seq }));
  };

  //</editor-fold>
}
