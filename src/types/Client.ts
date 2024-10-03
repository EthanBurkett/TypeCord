import { GatewayEvents, GatewayPayload } from "#/Socket";
import { Types } from "#/APITypes";
import Message from "$/Message";

export const ClientEventMap: {
  [key in GatewayEvents]: keyof ClientEvents;
} = {
  HELLO: "client:hello",
  READY: "client:ready",
  RESUMED: "gateway:resumed",
  RECONNECT: "gateway:reconnect",
  INVALID_SESSION: "gateway:invalidSession",
  APPLICATION_COMMAND_PERMISSIONS_UPDATE:
    "applicationCommand:permissionsUpdate",
  AUTO_MODERATION_RULE_CREATE: "automod:RuleCreate",
  AUTO_MODERATION_RULE_UPDATE: "automod:RuleUpdate",
  AUTO_MODERATION_RULE_DELETE: "automod:RuleDelete",
  AUTO_MODERATION_ACTION_EXECUTION: "automod:actionExecution",
  CHANNEL_CREATE: "channel:create",
  CHANNEL_UPDATE: "channel:update",
  CHANNEL_DELETE: "channel:delete",
  CHANNEL_PINS_UPDATE: "channel:pinsUpdate",
  THREAD_CREATE: "thread:create",
  THREAD_UPDATE: "thread:update",
  THREAD_DELETE: "thread:delete",
  THREAD_LIST_SYNC: "thread:listSync",
  THREAD_MEMBER_UPDATE: "thread:memberUpdate",
  THREAD_MEMBERS_UPDATE: "thread:membersUpdate",
  ENTITLEMENT_CREATE: "entitlement:create",
  ENTITLEMENT_UPDATE: "entitlement:update",
  ENTITLEMENT_DELETE: "entitlement:delete",
  GUILD_CREATE: "guild:create",
  GUILD_UPDATE: "guild:update",
  GUILD_DELETE: "guild:delete",
  GUILD_AUDIT_LOG_ENTRY_CREATE: "guild:auditLogEntryCreate",
  GUILD_BAN_ADD: "guild:banAdd",
  GUILD_BAN_REMOVE: "guild:banRemove",
  GUILD_EMOJIS_UPDATE: "guild:emojisUpdate",
  GUILD_STICKERS_UPDATE: "guild:stickersUpdate",
  GUILD_INTEGRATIONS_UPDATE: "guild:integrationsUpdate",
  GUILD_MEMBER_ADD: "guild:memberAdd",
  GUILD_MEMBER_REMOVE: "guild:memberRemove",
  GUILD_MEMBER_UPDATE: "guild:memberUpdate",
  GUILD_MEMBERS_CHUNK: "guild:membersChunk",
  GUILD_ROLE_CREATE: "guild:roleCreate",
  GUILD_ROLE_UPDATE: "guild:roleUpdate",
  GUILD_ROLE_DELETE: "guild:roleDelete",
  GUILD_SCHEDULED_EVENT_CREATE: "guild:scheduledEventCreate",
  GUILD_SCHEDULED_EVENT_UPDATE: "guild:scheduledEventUpdate",
  GUILD_SCHEDULED_EVENT_DELETE: "guild:scheduledEventDelete",
  GUILD_SCHEDULED_EVENT_USER_ADD: "guild:scheduledEventUserAdd",
  GUILD_SCHEDULED_EVENT_USER_REMOVE: "guild:scheduledEventUserRemove",
  GUILD_SOUNDBOARD_SOUND_CREATE: "guild:soundboardSoundCreate",
  GUILD_SOUNDBOARD_SOUND_UPDATE: "guild:soundboardSoundUpdate",
  GUILD_SOUNDBOARD_SOUND_DELETE: "guild:soundboardSoundDelete",
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: "guild:soundboardSoundsUpdate",
  SOUNDBOARD_SOUNDS: "soundboard:sounds",
  INTEGRATION_CREATE: "integration:create",
  INTEGRATION_UPDATE: "integration:update",
  INTEGRATION_DELETE: "integration:delete",
  INTERACTION_CREATE: "interaction:create",
  INVITE_CREATE: "invite:create",
  INVITE_DELETE: "invite:delete",
  MESSAGE_CREATE: "message:create",
  MESSAGE_UPDATE: "message:update",
  MESSAGE_DELETE: "message:delete",
  MESSAGE_DELETE_BULK: "message:deleteBulk",
  MESSAGE_REACTION_ADD: "message:reactionAdd",
  MESSAGE_REACTION_REMOVE: "message:reactionRemove",
  MESSAGE_REACTION_REMOVE_ALL: "message:reactionRemoveAll",
  MESSAGE_REACTION_REMOVE_EMOJI: "message:reactionRemoveEmoji",
  PRESENCE_UPDATE: "presence:update",
  STAGE_INSTANCE_CREATE: "stageInstance:create",
  STAGE_INSTANCE_UPDATE: "stageInstance:update",
  STAGE_INSTANCE_DELETE: "stageInstance:delete",
  SUBSCRIPTION_CREATE: "subscription:create",
  SUBSCRIPTION_UPDATE: "subscription:update",
  SUBSCRIPTION_DELETE: "subscription:delete",
  TYPING_START: "typing:start",
  USER_UPDATE: "user:update",
  VOICE_CHANNEL_EFFECT_SEND: "voiceChannel:effectSend",
  VOICE_STATE_UPDATE: "voiceState:update",
  VOICE_SERVER_UPDATE: "voiceServer:update",
  WEBHOOKS_UPDATE: "webhooks:update",
  MESSAGE_POLL_VOTE_ADD: "message:pollVoteAdd",
  MESSAGE_POLL_VOTE_REMOVE: "message:pollVoteRemove",
};

export type ClientEvents = {
  "client:hello": GatewayPayload;
  "client:ready": Types.Client | undefined;
  "gateway:resumed": unknown;
  "gateway:reconnect": unknown;
  "gateway:invalidSession": unknown;
  "applicationCommand:permissionsUpdate": unknown;
  "automod:RuleCreate": unknown;
  "automod:RuleUpdate": unknown;
  "automod:RuleDelete": unknown;
  "automod:actionExecution": unknown;
  "channel:create": Types.Channel;
  "channel:update": Types.Channel;
  "channel:delete": Types.Channel;
  "channel:pinsUpdate": unknown;
  "thread:create": unknown;
  "thread:update": unknown;
  "thread:delete": unknown;
  "thread:listSync": unknown;
  "thread:memberUpdate": unknown;
  "thread:membersUpdate": unknown;
  "entitlement:create": unknown;
  "entitlement:update": unknown;
  "entitlement:delete": unknown;
  "guild:create": Types.Guild;
  "guild:update": Types.Guild;
  "guild:delete": Types.Guild;
  "guild:auditLogEntryCreate": unknown;
  "guild:banAdd": unknown;
  "guild:banRemove": unknown;
  "guild:emojisUpdate": unknown;
  "guild:stickersUpdate": unknown;
  "guild:integrationsUpdate": unknown;
  "guild:memberAdd": Types.GuildMember;
  "guild:memberRemove": Types.GuildMember;
  "guild:memberUpdate": Types.GuildMember;
  "guild:membersChunk": unknown;
  "guild:roleCreate": unknown;
  "guild:roleUpdate": unknown;
  "guild:roleDelete": unknown;
  "guild:scheduledEventCreate": unknown;
  "guild:scheduledEventUpdate": unknown;
  "guild:scheduledEventDelete": unknown;
  "guild:scheduledEventUserAdd": unknown;
  "guild:scheduledEventUserRemove": unknown;
  "guild:soundboardSoundCreate": unknown;
  "guild:soundboardSoundUpdate": unknown;
  "guild:soundboardSoundDelete": unknown;
  "guild:soundboardSoundsUpdate": unknown;
  "soundboard:sounds": unknown;
  "integration:create": unknown;
  "integration:update": unknown;
  "integration:delete": unknown;
  "interaction:create": unknown;
  "invite:create": unknown;
  "invite:delete": unknown;
  "message:create": Message;
  "message:update": Message;
  "message:delete": Message;
  "message:deleteBulk": Array<Types.Message>;
  "message:reactionAdd": unknown;
  "message:reactionRemove": unknown;
  "message:reactionRemoveAll": unknown;
  "message:reactionRemoveEmoji": unknown;
  "presence:update": unknown;
  "stageInstance:create": unknown;
  "stageInstance:update": unknown;
  "stageInstance:delete": unknown;
  "subscription:create": unknown;
  "subscription:update": unknown;
  "subscription:delete": unknown;
  "typing:start": unknown;
  "user:update": Types.APIUser;
  "voiceChannel:effectSend": unknown;
  "voiceState:update": unknown;
  "voiceServer:update": unknown;
  "webhooks:update": unknown;
  "message:pollVoteAdd": unknown;
  "message:pollVoteRemove": unknown;
};
export namespace Events {
  export enum Application {
    PermissionsUpdate = "applicationCommand:permissionsUpdate",
  }

  export enum AutoModeration {
    RuleCreate = "automod:RuleCreate",
    RuleUpdate = "automod:RuleUpdate",
    RuleDelete = "automod:RuleDelete",
    ActionExecution = "automod:actionExecution",
  }

  export enum Channel {
    Create = "channel:create",
    Update = "channel:update",
    Delete = "channel:delete",
    PinsUpdate = "channel:pinsUpdate",
    ThreadCreate = "thread:create",
    ThreadUpdate = "thread:update",
    ThreadDelete = "thread:delete",
    ThreadListSync = "thread:listSync",
    ThreadMemberUpdate = "thread:memberUpdate",
    ThreadMembersUpdate = "thread:membersUpdate",
  }

  export enum Entitlement {
    Create = "entitlement:create",
    Update = "entitlement:update",
    Delete = "entitlement:delete",
  }

  export enum Guild {
    Create = "guild:create",
    Update = "guild:update",
    Delete = "guild:delete",
    AuditLogEntryCreate = "guild:auditLogEntryCreate",
    BanAdd = "guild:banAdd",
    BanRemove = "guild:banRemove",
    EmojisUpdate = "guild:emojisUpdate",
    StickersUpdate = "guild:stickersUpdate",
    IntegrationsUpdate = "guild:integrationsUpdate",
    MemberAdd = "guild:memberAdd",
    MemberRemove = "guild:memberRemove",
    MemberUpdate = "guild:memberUpdate",
    MembersChunk = "guild:membersChunk",
    RoleCreate = "guild:roleCreate",
    RoleUpdate = "guild:roleUpdate",
    RoleDelete = "guild:roleDelete",
    ScheduledEventCreate = "guild:scheduledEventCreate",
    ScheduledEventUpdate = "guild:scheduledEventUpdate",
    ScheduledEventDelete = "guild:scheduledEventDelete",
    ScheduledEventUserAdd = "guild:scheduledEventUserAdd",
    ScheduledEventUserRemove = "guild:scheduledEventUserRemove",
    SoundboardSoundCreate = "guild:soundboardSoundCreate",
    SoundboardSoundUpdate = "guild:soundboardSoundUpdate",
    SoundboardSoundDelete = "guild:soundboardSoundDelete",
    SoundboardSoundsUpdate = "guild:soundboardSoundsUpdate",
  }

  export enum Integration {
    Create = "integration:create",
    Update = "integration:update",
    Delete = "integration:delete",
  }

  export enum Interaction {
    Create = "interaction:create",
  }

  export enum Invite {
    Create = "invite:create",
    Delete = "invite:delete",
  }

  export enum Message {
    Create = "message:create",
    Update = "message:update",
    Delete = "message:delete",
    DeleteBulk = "message:deleteBulk",
    ReactionAdd = "message:reactionAdd",
    ReactionRemove = "message:reactionRemove",
    ReactionRemoveAll = "message:reactionRemoveAll",
    ReactionRemoveEmoji = "message:reactionRemoveEmoji",
    PollVoteAdd = "message:pollVoteAdd",
    PollVoteRemove = "message:pollVoteRemove",
  }

  export enum Stage {
    Create = "stageInstance:create",
    Update = "stageInstance:update",
    Delete = "stageInstance:delete",
  }

  export enum Subscription {
    Create = "subscription:create",
    Update = "subscription:update",
    Delete = "subscription:delete",
  }

  export enum Voice {
    ChannelEffectSend = "voiceChannel:effectSend",
    StateUpdate = "voiceState:update",
    ServerUpdate = "voiceServer:update",
  }

  export enum Webhooks {
    Update = "webhooks:update",
  }

  export enum Client {
    Hello = "client:hello",
    Ready = "client:ready",
    Resumed = "gateway:resumed",
    Reconnect = "gateway:reconnect",
    InvalidSession = "gateway:invalidSession",
    SoundboardSounds = "soundboard:sounds",
    PresenceUpdate = "presence:update",
    TypingStart = "typing:start",
    UserUpdate = "user:update",
  }
}

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

export interface ClientSetup {
  intents: Array<bigint>;
  debug?: boolean;
}
