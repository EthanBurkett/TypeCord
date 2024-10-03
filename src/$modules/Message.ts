import { Types } from "#/APITypes";
import API from "$/API";

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

  //</editor-fold>

  constructor(obj: Types.Message) {
    Object.assign(this, obj);
  }

  public async reply(content: string) {
    return await API.Messages.Reply(this, {
      content,
      message_reference: { message_id: this.id },
    });
  }
}
