import { Types } from "#/APITypes";
import API from "../API";
import Client from "../Client";
import Registry from "../Registry";
import Message from "./Message";
import Messages from "./Messages";

export default class Guild implements Types.APIGuild {
  id = "";
  name = "";
  icon = null;
  description = null;
  home_header = null;
  splash = null;
  discovery_splash = null;
  features = [];
  banner = null;
  owner_id = "";
  application_id = null;
  region = "";
  afk_channel_id = null;
  afk_timeout = 0;
  system_channel_id = "";
  system_channel_flags = 0;
  widget_enabled = false;
  widget_channel_id = null;
  verification_level = 0;
  roles = [];
  default_message_notifications = 0;
  mfa_level = 0;
  explicit_content_filter = 0;
  max_presences = null;
  max_members = 0;
  max_stage_video_channel_users = 0;
  max_video_channel_users = 0;
  vanity_url_code = null;
  premium_tier = 0;
  premium_subscription_count = 0;
  preferred_locale = "";
  rules_channel_id = null;
  hub_type = null;
  premium_progress_bar_enabled = false;
  latest_onboarding_question_id = null;
  nsfw = false;
  nsfw_level = 0;
  hoist = false;
  stickers = [];
  safety_alerts_channel_id = null;
  public_updates_channel_id = null;
  emojis = [];
  incidents_data = null;
  inventory_settings = null;
  embed_enabled = false;
  embed_channel_id = null;
  private _client?: Client;
  private _cache: Registry<string, Message> = new Registry();

  constructor(data: Types.APIGuild, client?: Client) {
    Object.assign(this, data);
    this._client = client;
  }

  public get messages() {
    return new Messages(this._client);
  }

  public get cache() {
    return this._cache;
  }
}
