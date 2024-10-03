type EventsMap = {
  [event: string]: any; // Define the structure for your events here
};

export default class EventEmitter<T extends EventsMap> {
  private listeners: {
    [K in keyof T]?: Array<(payload: T[K]) => void>;
  } = {};

  public on<K extends keyof T>(
    event: K,
    listener: (payload: T[K]) => void,
  ): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(listener);
  }

  public once<K extends keyof T>(
    event: K,
    listener: (payload: T[K]) => void,
  ): void {
    const onceListener = (payload: T[K]) => {
      listener(payload);
      this.off(event, onceListener);
    };
    this.on(event, onceListener);
  }

  public off<K extends keyof T>(
    event: K,
    listener: (payload: T[K]) => void,
  ): void {
    if (!this.listeners[event]) return;

    this.listeners[event] = this.listeners[event]!.filter(
      (l) => l !== listener,
    );
  }

  public emit<K extends keyof T>(event: K, payload: T[K]): void {
    if (!this.listeners[event]) return;

    this.listeners[event]!.forEach((listener) => listener(payload));
  }
}
