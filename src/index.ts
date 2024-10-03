import Client from "$/Client";
import { Events } from "#/Client";
import * as process from "node:process";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"],
  debug: true,
});

const logger = client.logger;

client.once(Events.Client.Ready, (client) => {
  logger.info(`${client.self?.user.username} is now online!`);
});

client.on(Events.Client.MessageCreate, (message) => {
  logger.raw({ message });
});

client.login(process.env.BOT_TOKEN!);
