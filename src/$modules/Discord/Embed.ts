import { Types } from "../../types/APITypes";

export default class Embed {
  private title = "";
  private type = "";
  private description = "";
  private url = "";
  private timestamp: Date | undefined;
  private color: Types.Colors = 0x000000;
  private footer = {
    text: "",
    icon_url: "",
    proxy_icon_url: "",
  };
  private image = {
    url: "",
    proxy_url: "",
    height: 0,
    width: 0,
  };
  private thumbnail = {
    url: "",
    proxy_url: "",
    height: 0,
    width: 0,
  };
  private video = {
    url: "",
    height: 0,
    width: 0,
  };
  private provider = {
    name: "",
    url: "",
  };

  constructor(data?: Types.EmbedData) {
    if (data) Object.assign(this, data);
  }

  public toObject(): Types.EmbedData {
    return {
      title: this.title,
      type: this.type,
      description: this.description,
      url: this.url,
      timestamp: this.timestamp,
      color: this.color,
      footer: this.footer,
      image: this.image,
      thumbnail: this.thumbnail,
      video: this.video,
      provider: this.provider,
    };
  }

  public toJSON(): string {
    return JSON.stringify(this.toObject());
  }

  public static fromJSON(json: string) {
    return new Embed(JSON.parse(json));
  }

  public static fromObject(obj: Types.EmbedData) {
    return new Embed(obj);
  }

  public setTitle(title: string) {
    this.title = title;
    return this;
  }

  public setDescription(description: string) {
    this.description = description;
    return this;
  }

  public setColor(color: Types.Colors) {
    this.color = color;
    return this;
  }

  public setTimestamp(timestamp: Date) {
    this.timestamp = timestamp;
    return this;
  }

  public setFooter(footer: Types.Embed.Footer) {
    this.footer = footer;
    return this;
  }

  public setImage(image: Types.Embed.Image) {
    this.image = image;
    return this;
  }

  public setThumbnail(thumbnail: Types.Embed.Thumbnail) {
    this.thumbnail = thumbnail;
    return this;
  }

  public setVideo(video: Types.Embed.Video) {
    this.video = video;
    return this;
  }

  public setProvider(provider: Types.Embed.Provider) {
    this.provider = provider;
    return this;
  }
}
