import Message from "$/Message";
import { Fetch } from "$/Fetch";
import { Requests, Types } from "#/APITypes";

export default {
  Messages: {
    Reply: async (
      src: Message,
      reply: Requests.Message,
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
  },
};
