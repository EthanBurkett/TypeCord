import Client from "$/Client";
import { Events } from "#/Client";
import * as process from "node:process";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"],
  debug: true,
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
  logger.raw({ message });
});

client.login(process.env.BOT_TOKEN!);
