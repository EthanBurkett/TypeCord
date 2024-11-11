import API from "../API";
import Client from "../Client";
import Registry from "../Registry";
import Guild from "./Guild";

export default class Guilds {
  private static _cache: Registry<string, Guild> = new Registry();

  private _client: Client;
  constructor(client: Client) {
    this._client = client;
  }

  public async fetch(id: string) {
    const guild = this.cache.ensure(id, async (id, cache) => {
      const data = await API.Guilds.Get(id);
      if (!data.data) {
        this._client.logger.error("Guild not found");
        return null as unknown as Guild; // bypass type checking
      }
      return new Guild(data.data, this._client);
    });
    return guild;
  }

  public get cache() {
    return Guilds._cache;
  }
}
