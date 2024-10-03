import Client from "$/Client";
import { Events, Intents } from "#/Client";
import * as process from "node:process";
import Message from "$/Message";

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

client.on(Events.Message.Create, async (message) => {
  if (message.author.id === client.self?.user.id) return;

  await message.reply(
    'kys bitch, stop saying dumb shit like "' + message.content + '"',
  );

  if (message.content == "!restart") {
    client.restart();
  }
});

client.login(process.env.BOT_TOKEN!);
