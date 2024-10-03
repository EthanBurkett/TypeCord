export const DiscordApi = `https://discord.com/api/v10`;

export interface IResponse<T> {
  data?: T;
  error?: {
    message: string;
    detailed: any;
  };
}

export const Fetch = async <T>({
  url,
  headers,
  method = "GET",
  body,
  auth = true,
}: {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: { [key: string]: string };
  body?: Record<string, any>;
  auth?: boolean;
}): Promise<IResponse<T>> => {
  return (await fetch(`${url.includes("http") ? url : `${DiscordApi}${url}`}`, {
    method: method ? method : "GET",
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
      Authorization: auth ? `Bot ${process.env.BOT_TOKEN!}` : "",
      ...headers,
    },
  })
    .then(async (d) => {
      const data = await d.json();
      if (data.error) throw new Error(data.error);
      if (data.errors) throw new Error(data.errors);
      return {
        data,
      };
    })
    .catch((e) => {
      return {
        error: {
          message: e.message,
          detailed: e,
        },
      };
    })) as IResponse<T>;
};
