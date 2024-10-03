import EventEmitter from "$/EventEmitter";
import Client from "$/Client";
import { GatewayEvents } from "#/Socket";

export const ClientEventMap: {
  [key in GatewayEvents]: keyof ClientEvents;
} = {
  READY: "client:ready",
  GUILD_CREATE: "guild:create",
  MESSAGE_CREATE: "message:create",
};
export type ClientEvents = {
  "client:ready": Client;
  "guild:create": DiscordGuild;
  "message:create": Message;
};
export namespace Events {
  export enum Client {
    Ready = "client:ready",
    GuildCreate = "guild:create",
    MessageCreate = "message:create",
  }
}

export type GeoLocations =
  | "us-south"
  | "atlanta"
  | "us-central"
  | "us-west"
  | "us-east";

export const Intents = {
  Guilds: 1n << 0n,
  GuildMembers: 1n << 1n,
  GuildModeration: 1n << 2n,
  GuildExpressions: 1n << 3n,
  GuildIntegrations: 1n << 4n,
  GuildWebhooks: 1n << 5n,
  GuildInvites: 1n << 6n,
  GuildVoiceStates: 1n << 7n,
  GuildPresences: 1n << 8n,
  GuildMessages: 1n << 9n,
  GuildMessageReactions: 1n << 10n,
  GuildMessageTyping: 1n << 11n,
  DirectMessages: 1n << 12n,
  DirectMessageReactions: 1n << 13n,
  DirectMessageTyping: 1n << 14n,
  MessageContent: 1n << 15n,
  GuildScheduledEvents: 1n << 16n,
  AutoModerationConfiguration: 1n << 20n,
  AutoModerationExecution: 1n << 21n,
  GuildMessagePolls: 1n << 24n,
  DirectMessagePolls: 1n << 25n,
};

export type DiscordAPIUser = {
  verified: boolean;
  username: string;
  mfa_enabled: boolean;
  id: string;
  global_name: string;
  flags: BigInt;
  email: string;
  discriminator: string;
  clan: string;
  bot: boolean;
  avatar: null;
};

export type DiscordClient = {
  v: number;
  user_settings: {};
  user: DiscordAPIUser;
  session_type: string;
  session_id: string;
  resume_gateway_url: string;
  relationships: unknown[];
  private_channels: unknown[];
  presences: unknown[];
  guilds: DiscordGuild[];
  guild_join_requests: unknown[];
  geo_ordered_rtc_regions: GeoLocations[];
  auth: {};
  application: {
    id: string;
    flags: BigInt;
  };
};

export type DiscordGuild = {
  members: DiscordAPIUser[] | undefined;
  default_message_notifications: number | undefined;
  nsfw_level: number | undefined;
  features: string[] | undefined; // TODO: Define the structure for features
  inventory_settings: unknown | undefined;
  rules_channel_id: string | undefined;
  safety_alerts_channel_id: string | undefined;
  verification_level: number | undefined;
  application_command_counts: unknown[] | undefined; // TODO: Define the structure for application_command_counts
  soundboard_sounds: unknown[] | undefined; // TODO: Define the structure for soundboard_sounds
  id: string | undefined;
  stickers: unknown[] | undefined; // TODO: Define the structure for stickers
  afk_timeout: number | undefined;
  joined_at: Date | undefined;
  channels: unknown[] | undefined; // TODO: Define the structure for channels
  voice_states: unknown[] | undefined; // TODO: Define the structure for voice_states
  activity_instances: unknown[] | undefined; // TODO: Define the structure for activity_instances
  name: string | undefined;
  public_updates_channel_id: string | undefined;
  region: string | undefined;
  splash: string | undefined;
  max_members: number | undefined;
  owner_id: string | undefined;
  system_channel_flags: number | undefined;
  threads: unknown[] | undefined; // TODO: Define the structure for threads
  premium_tier: number | undefined;
  system_channel_id: string | undefined;
  guild_scheduled_events: unknown[] | undefined; // TODO: Define the structure for guild_scheduled_events
  large: boolean | undefined;
  preferred_locale: string | undefined; // TODO: Define locales
  description: string | undefined;
  stage_instances: unknown[] | undefined; // TODO: Define the structure for stage_instances
  icon: string | undefined;
  premium_subscription_count: number | undefined;
  lazy: boolean | undefined;
  max_stage_video_channel_users: number | undefined;
  explicit_content_filter: number | undefined;
  banner: string | undefined;
  home_header: string | undefined;
  unavailable: boolean | undefined;
  mfa_level: number | undefined;
  emojis: unknown[] | undefined; // TODO: Define the structure for emojis
  clan: string | undefined;
  incidents_data: null | undefined;
  application_id: string | undefined;
  premium_progress_bar_enabled: boolean | undefined;
  hub_type: null | undefined;
  presences: unknown[] | undefined; // TODO: Define the structure for presences
  nsfw: boolean | undefined;
  discovery_splash: string | undefined;
  member_count: number | undefined;
  version: number | undefined;
  afk_channel_id: string | undefined;
  embedded_activities: unknown[] | undefined; // TODO: Define the structure for embedded_activities
  latest_onboarding_question_id: string | undefined;
  roles: unknown[] | undefined; // TODO: Define the structure for roles
  max_video_channel_users: number | undefined;
  vanity_url_code: string | undefined;
};

export interface ClientSetup {
  intents: Array<keyof typeof Intents>;
  debug?: boolean;
}

export interface GuildMember {
  roles: Array<string>; // TODO: Define the structure for roles
  premium_since: Date;
  pending: boolean;
  nick: string;
  mute: boolean;
  joined_at: Date;
  flags: BigInt;
  deaf: boolean;
  communication_disabled_until: Date;
  banner: null;
  avatar: null;
}

export type Mention = Pick<
  DiscordAPIUser,
  "username" | "global_name" | "id" | "discriminator" | "clan" | "avatar"
> & {
  public_flags: BigInt;
  avatar_decoration_data: unknown;
};

export interface Message {
  type: number;
  tts: boolean;
  timestamp: Date;
  pinned: boolean;
  nonce: string;
  mentions: Array<Mention>;
  mention_roles: unknown[]; // TODO: Define the structure for roles
  mention_everyone: boolean;
  member: GuildMember;
  id: string;
  flags: BigInt;
  embeds: unknown[];
  edited_timestamp: Date;
  content: string;
  components: unknown[];
  channel_id: string;
  author: DiscordAPIUser;
  attachments: unknown[];
  guild_id: string;
}
