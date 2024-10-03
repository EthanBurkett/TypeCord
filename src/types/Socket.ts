export enum OpCode {
  Ready,
  Heartbeat,
  Identify,
  PresenceUpdate,
  VoiceStateUpdate,
  Resume = 6,
  Reconnect,
  RequestGuildMembers,
  InvalidSession,
  Hello,
  HeartbeatAck = 10,
  RequestSoundboardSounds = 31,
}

export enum GatewayEvents {
  Ready = "READY",
  GuildCreate = "GUILD_CREATE",
  MessageCreate = "MESSAGE_CREATE",
}

export type GatewayPayload = {
  t: GatewayEvents;
  d: any;
  op: OpCode;
  [key: string]: any;
};
