import { Requests, Types } from "#/APITypes";
import API from "$/API";
import { DeepPartial } from "@/types/Utilities";
import Client from "../Client";
import Embed from "./Embed";
import Guild from "./Guild";

export default class Message implements Types.Message {
  //<editor-fold desc="Initialize Properties">
  type = 0;
  tts = false;
  timestamp = new Date();
  pinned = false;
  nonce = "";
  mentions = [];
  mention_roles = [];
  mention_everyone = false;
  member = {
    roles: [],
    premium_since: new Date(),
    pending: false,
    nick: "",
    mute: false,
    joined_at: new Date(),
    flags: BigInt(0),
    deaf: false,
    communication_disabled_until: new Date(),
    banner: null,
    avatar: null,
  };
  id = "";
  flags = BigInt(0);
  embeds = [];
  edited_timestamp = new Date();
  content = "";
  components = [];
  channel_id = "";
  author = {
    username: "",
    global_name: "",
    id: "",
    discriminator: "",
    clan: "",
    avatar: "",
    public_flags: BigInt(0),
    avatar_decoration_data: null,
  };
  attachments = [];
  guild_id = "";
  client?: Client;
  //</editor-fold>

  constructor(obj: Types.Message, client?: Client) {
    Object.assign(this, obj);
    this.client = client;
  }

  private _parseData(data: DeepPartial<Requests.Message>) {
    data.embeds = data.embeds?.map((embed: Embed | Types.EmbedData) =>
      embed instanceof Embed ? embed.toObject() : embed
    );
    return data;
  }

  public async reply(data: Omit<Requests.Message, "message_reference">) {
    return await API.Messages.Reply(this, {
      ...this._parseData(data),
      message_reference: { message_id: this.id },
    });
  }

  public async edit(data: Omit<Requests.Message, "sticker_ids">) {
    return await API.Messages.Edit(this, this._parseData(data));
  }

  public async delete() {
    return await API.Messages.Delete(this);
  }

  public get guild(): Promise<Guild | null> {
    return new Promise((resolve) => {
      this.client?.guilds.fetch(this.guild_id).then((g) => resolve(g));
    });
  }

  // TODO: Extract this into a separate class like `Reactions`
  public async addReaction(emoji: string) {
    return await API.Reactions.Add(this, emoji);
  }
}
