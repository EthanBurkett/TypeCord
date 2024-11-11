import { DeepPartial } from "#/Utilities";
import Embed from "$/Discord/Embed";
import Guilds from "$/Discord/Guilds";

export namespace Requests {
  export interface Message {
    content?: string;
    embeds?: Array<Types.EmbedData> | Array<Embed>;
    allowed_mentions?: any;
    sticker_ids?: any[];
    components?: any[];
    flags?: number;
    attachments?: object[];
    message_reference?: any;
    nonce?: number;
    tts?: boolean;
  }
}

export const Colors = {
  Default: 0x000000,
  White: 0xffffff,
  Aqua: 0x1abc9c,
  Green: 0x57f287,
  Blue: 0x3498db,
  Yellow: 0xfee75c,
  Purple: 0x9b59b6,
  LuminousVividPink: 0xe91e63,
  Fuchsia: 0xeb459e,
  Gold: 0xf1c40f,
  Orange: 0xe67e22,
  Red: 0xed4245,
  Grey: 0x95a5a6,
  Navy: 0x34495e,
  DarkAqua: 0x11806a,
  DarkGreen: 0x1f8b4c,
  DarkBlue: 0x206694,
  DarkPurple: 0x71368a,
  DarkVividPink: 0xad1457,
  DarkGold: 0xc27c0e,
  DarkOrange: 0xa84300,
  DarkRed: 0x992d22,
  DarkGrey: 0x979c9f,
  DarkerGrey: 0x7f8c8d,
  LightGrey: 0xbcc0c0,
  DarkNavy: 0x2c3e50,
  Blurple: 0x5865f2,
  Greyple: 0x99aab5,
  DarkButNotBlack: 0x2c2f33,
  NotQuiteBlack: 0x23272a,
  Random: () => Math.floor(Math.random() * 0xffffff),
};
export namespace Types {
  export type GeoLocations =
    | "us-south"
    | "atlanta"
    | "us-central"
    | "us-west"
    | "us-east";

  export type HexColorString = `#${string}`;
  export type Colors =
    | keyof typeof Colors
    | "Random"
    | readonly [red: number, green: number, blue: number]
    | number
    | HexColorString;

  export namespace Embed {
    export interface Footer {
      text: string;
      icon_url: string;
      proxy_icon_url: string;
    }
    export interface Image {
      url: string;
      proxy_url: string;
      height: number;
      width: number;
    }
    export interface Thumbnail {
      url: string;
      proxy_url: string;
      height: number;
      width: number;
    }
    export interface Video {
      url: string;
      height: number;
      width: number;
    }
    export interface Provider {
      name: string;
      url: string;
    }
  }
  export type EmbedData = DeepPartial<{
    title: string;
    type: string;
    description: string;
    url: string;
    timestamp: Date;
    color: Colors;
    footer: Embed.Footer;
    image: Embed.Image;
    thumbnail: Embed.Thumbnail;
    video: Embed.Video;
    provider: Embed.Provider;
  }>;

  export interface Client {
    v: number;
    user_settings: {};
    user: Types.APIUser;
    session_type: string;
    session_id: string;
    resume_gateway_url: string;
    relationships: unknown[];
    private_channels: unknown[];
    presences: unknown[];
    guilds: Guilds;
    guild_join_requests: unknown[];
    geo_ordered_rtc_regions: Array<Types.GeoLocations>;
    auth: {};
    application: {
      id: string;
      flags: BigInt;
    };
  }

  export interface Channel {
    version: number;
    type: number;
    topic: string;
    rate_limit_per_user: number;
    position: number;
    permission_overwrites: unknown[];
    parent_id: string;
    nsfw: boolean;
    name: string;
    last_message_id: string;
    id: string;
    guild_id: string;
    flags: BigInt;
  }

  export interface APIUser {
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
    avatar: string;
  }

  export interface Guild {
    members: Array<Types.APIUser> | null;
    default_message_notifications: number | null;
    nsfw_level: number | null;
    features: string[] | null; // TODO: Define the structure for features
    inventory_settings: unknown | null;
    rules_channel_id: string | null;
    safety_alerts_channel_id: string | null;
    verification_level: number | null;
    application_command_counts: unknown[] | null; // TODO: Define the structure for application_command_counts
    soundboard_sounds: unknown[] | null; // TODO: Define the structure for soundboard_sounds
    id: string | null;
    stickers: unknown[] | null; // TODO: Define the structure for stickers
    afk_timeout: number | null;
    joined_at: Date | null;
    channels: unknown[] | null; // TODO: Define the structure for channels
    voice_states: unknown[] | null; // TODO: Define the structure for voice_states
    activity_instances: unknown[] | null; // TODO: Define the structure for activity_instances
    name: string | null;
    public_updates_channel_id: string | null;
    region: string | null;
    splash: string | null;
    max_members: number | null;
    owner_id: string | null;
    system_channel_flags: number | null;
    threads: unknown[] | null; // TODO: Define the structure for threads
    premium_tier: number | null;
    system_channel_id: string | null;
    guild_scheduled_events: unknown[] | null; // TODO: Define the structure for guild_scheduled_events
    large: boolean | null;
    preferred_locale: string | null; // TODO: Define locales
    description: string | null;
    stage_instances: unknown[] | null; // TODO: Define the structure for stage_instances
    icon: string | null;
    premium_subscription_count: number | null;
    lazy: boolean | null;
    max_stage_video_channel_users: number | null;
    explicit_content_filter: number | null;
    banner: string | null;
    home_header: string | null;
    unavailable: boolean | null;
    mfa_level: number | null;
    emojis: unknown[] | null; // TODO: Define the structure for emojis
    clan: string | null;
    incidents_data: null | null;
    application_id: string | null;
    premium_progress_bar_enabled: boolean | null;
    hub_type: null | null;
    presences: unknown[] | null; // TODO: Define the structure for presences
    nsfw: boolean | null;
    discovery_splash: string | null;
    member_count: number | null;
    version: number | null;
    afk_channel_id: string | null;
    embedded_activities: unknown[] | null; // TODO: Define the structure for embedded_activities
    latest_onboarding_question_id: string | null;
    roles: unknown[] | null; // TODO: Define the structure for roles
    max_video_channel_users: number | null;
    vanity_url_code: string | null;
  }

  export interface APIGuild {
    id: string;
    name: string;
    icon: string | null;
    description: string | null;
    home_header: string | null;
    splash: string | null;
    discovery_splash: string | null;
    features: Array<string>;
    banner: string | null;
    owner_id: string;
    application_id: string | null;
    region: string;
    afk_channel_id: string | null;
    afk_timeout: number;
    system_channel_id: string;
    system_channel_flags: number;
    widget_enabled: boolean;
    widget_channel_id: string | null;
    verification_level: number;
    roles: Array<Types.GuildRole>;
    default_message_notifications: number;
    mfa_level: number;
    explicit_content_filter: number;
    max_presences: number | null;
    max_members: number;
    max_stage_video_channel_users: number;
    max_video_channel_users: number;
    vanity_url_code: string | null;
    premium_tier: number;
    premium_subscription_count: number;
    preferred_locale: string;
    rules_channel_id: string | null;
    hub_type: string | null;
    premium_progress_bar_enabled: boolean;
    latest_onboarding_question_id: string | null;
    nsfw: boolean;
    nsfw_level: number;
    hoist: boolean;
    stickers: unknown[]; // TODO: Define the structure for stickers
    safety_alerts_channel_id: null;
    public_updates_channel_id: null;
    emojis: unknown[]; // TODO: Define the structure for emojis
    incidents_data: null;
    inventory_settings: null;
    embed_enabled: boolean;
    embed_channel_id: string | null;
  }

  export interface GuildRole {
    id: string;
    name: string;
    description: string | null;
    permissions: string;
    position: number;
    color: number;
    hoist: boolean;
    managed: boolean;
    mentionable: boolean;
    icon: string | null;
    unicode_emoji: string | null;
    flags: number;
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

  export type User = Pick<
    Types.APIUser,
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
    mentions: Array<User>;
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
    author: Types.User;
    attachments: unknown[];
    guild_id: string;
  }

  export interface Reaction {
    emoji: {
      id: string;
      name: string;
    };
    count: number;
    count_details: {
      burst: number;
      normal: number;
    };
    burst_colors: Array<unknown>;
    me_burst: boolean;
    burst_me: boolean;
    me: boolean;
    burst_count: number;
  }
}
