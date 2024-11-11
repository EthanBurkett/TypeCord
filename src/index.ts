import Client from "$/Client";
import { Events, Intents } from "#/Client";
import Embed from "./$modules/Discord/Embed";
import { Colors } from "./types/APITypes";
import { BOT_TOKEN } from "./!config";

const client = new Client({
  intents: [Intents.Guilds, Intents.GuildMessages, Intents.MessageContent],
  debug: true,
});

const logger = client.logger;

client.on(Events.Client.Ready, (client) => {
  logger.info(`${client?.user.username} is now online!`);
});

client.on(Events.Channel.Create, (channel) => {
  logger.info(`Channel ${channel.name} has been created!`);
});

client.on(Events.Channel.Delete, (channel) => {
  logger.info(`Channel ${channel.name} has been deleted!`);
});

client.on(Events.Message.Create, async (message) => {
  if (message.author.id === client.self?.user.id) return;

  if (message.content == "!restart") {
    const msg = await message.reply({
      embeds: [
        new Embed({
          title: "Restarting Bot...",
          description: "The bot is restarting...",
          color: Colors.Red,
        }),
      ],
    });

    client.restart().then(async (d: any) => {
      await msg?.edit({
        embeds: [
          new Embed({
            title: "Bot Restarted!",
            description: "The bot has been restarted!",
            color: Colors.Random(),
          }),
        ],
      });
    });
  }
});

client.login(BOT_TOKEN);
