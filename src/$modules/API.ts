import Message from "$/Message";
import { Fetch } from "$/Fetch";
import { Requests } from "#/APITypes";

export default {
  Messages: {
    Reply: async (src: Message, reply: Requests.Message) => {
      await Fetch({
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
      }).catch((e) => {
        console.log({ e });
      });
    },
  },
};
