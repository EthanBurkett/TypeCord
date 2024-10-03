import Client from "$/Client";
import { Events, Intents } from "#/Client";
import * as process from "node:process";

const client = new Client({
  intents: [Intents.Guilds, Intents.GuildMessages, Intents.MessageContent],
  debug: false,
});

const logger = client.logger;

client.once(Events.Client.Ready, (client) => {
  logger.info(`${client?.user.username} is now online!`);
});

client.on(Events.Channel.Create, (channel) => {
  logger.info(`Channel ${channel.name} has been created!`);
});

client.on(Events.Channel.Delete, (channel) => {
  logger.info(`Channel ${channel.name} has been deleted!`);
});

client.on(Events.Message.Create, (message) => {
  logger.raw({ author: message.author.username, content: message.content });
});

client.login(process.env.BOT_TOKEN!);
