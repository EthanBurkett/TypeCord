import API from "../API";
import Client from "../Client";
import Registry from "../Registry";
import Message from "./Message";

export default class Messages {
  private _client?: Client;
  private _cache: Registry<string, Message> = new Registry();

  constructor(client?: Client) {
    this._client = client;
  }

  public async fetch(channel_id: string, message_id: string) {
    return this.cache.ensure(message_id, async (id, cache) => {
      const data = await API.Messages.Get(channel_id, id);
      if (!data.data) {
        this._client?.logger.error("Message not found");
        return null as unknown as Message; // bypass type checking
      }
      return new Message(data.data, this._client);
    });
  }

  public get cache() {
    return this._cache;
  }
}
