type Listener<T extends Array<unknown>> = (...args: T) => void;

export default class EventEmitter<
  EventMap extends Record<string, Array<unknown>>
> {
  private eventListeners: {
    [K in keyof EventMap]?: Set<Listener<EventMap[K]>>;
  } = {};

  public on<K extends keyof EventMap>(
    event: K,
    listener: Listener<EventMap[K]>
  ) {
    if (!this.eventListeners[event]) this.eventListeners[event] = new Set();
    this.eventListeners[event].add(listener);
  }

  public emit<K extends keyof EventMap>(event: K, ...args: EventMap[K]) {
    const listeners = this.eventListeners[event] ?? new Set();
    for (const listener of listeners) listener(...args);
  }

  public off<K extends keyof EventMap>(
    event: K,
    listener: Listener<EventMap[K]>
  ) {
    this.eventListeners[event]?.delete(listener);
  }

  public once<K extends keyof EventMap>(
    event: K,
    listener: Listener<EventMap[K]>
  ) {
    const wrapper = (...args: EventMap[K]) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}
