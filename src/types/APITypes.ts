export namespace Types {
  export type GeoLocations =
    | "us-south"
    | "atlanta"
    | "us-central"
    | "us-west"
    | "us-east";

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
    guilds: Array<Types.Guild>;
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
    avatar: null;
  }

  export interface Guild {
    members: Array<Types.APIUser> | undefined;
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
    author: Types.APIUser;
    attachments: unknown[];
    guild_id: string;
  }
}
