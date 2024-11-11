import Message from "$/Discord/Message";
import { Fetch } from "$/Fetch";
import { Requests, Types } from "#/APITypes";

export default {
  Messages: {
    Get: async (channel_id: string, message_id: string) => {
      return await Fetch<Types.Message>({
        url: `/channels/${channel_id}/messages/${message_id}`,
        method: "GET",
      });
    },
    Reply: async (
      src: Message,
      reply: Requests.Message
    ): Promise<void | Message | undefined> => {
      return await Fetch<Types.Message>({
        url: `/channels/${src.channel_id}/messages`,
        method: "POST",
        body: {
          embeds: [],
          allowed_mentions: {},
          attachments: [],
          components: [],
          sticker_ids: [],
          nonce: 0,
          flags: 1 << 6,
          ...reply,
        },
      })
        .then((d) => d.data && new Message(d.data))
        .catch((e) => {
          console.log({ e });
        });
    },
    Edit: async (
      src: Message,
      edit: Omit<Requests.Message, "sticker_ids">
    ): Promise<void | Message | undefined> => {
      return await Fetch<Types.Message>({
        url: `/channels/${src.channel_id}/messages/${src.id}`,
        method: "PATCH",
        body: {
          embeds: [],
          allowed_mentions: {},
          attachments: [],
          components: [],
          nonce: 0,
          flags: 1 << 6,
          ...edit,
        },
      })
        .then((d) => d.data && new Message(d.data))
        .catch((e) => {
          console.log({ e });
        });
    },
    Delete: async (src: Message): Promise<void | Message | undefined> => {
      return await Fetch<Types.Message>({
        url: `/channels/${src.channel_id}/messages/${src.id}`,
        method: "DELETE",
      })
        .then((d) => d.data && new Message(d.data))
        .catch((e) => {
          console.log({ e });
        });
    },
  },
  Reactions: {
    Add: async (
      src: Message,
      emoji: string
    ): Promise<void | Message | undefined> => {
      return await Fetch<Types.Message>({
        url: `/channels/${src.channel_id}/messages/${src.id}/reactions/${emoji}/@me`,
        method: "PUT",
      })
        .then((d) => d.data && new Message(d.data))
        .catch((e) => {
          console.log({ e });
        });
    },
    Remove: async (
      src: Message,
      emoji: string
    ): Promise<void | Message | undefined> => {
      return await Fetch<Types.Message>({
        url: `/channels/${src.channel_id}/messages/${src.id}/reactions/${emoji}/@me`,
        method: "DELETE",
      })
        .then((d) => d.data && new Message(d.data))
        .catch((e) => {
          console.log({ e });
        });
    },
  },
  Guilds: {
    Get: async (id: string) => {
      return await Fetch<Types.APIGuild>({
        url: `/guilds/${id}`,
        method: "GET",
      });
    },
  },
};
