import Guild from "./Discord/Guild";

export default class Registry<Key, Value> extends Map<Key, Value> {
  constructor() {
    super();
  }

  public ensure(
    key: Key,
    defaultValueGenerator: (key: Key, registry: this) => Value
  ): Value;
  public ensure(
    key: Key,
    defaultValueGenerator: (key: Key, registry: this) => Promise<Value>
  ): Promise<Value>;
  public ensure(
    key: Key,
    defaultValueGenerator: (key: Key, registry: this) => Value | Promise<Value>
  ): Value | Promise<Value> {
    if (this.has(key)) return this.get(key)!;
    if (typeof defaultValueGenerator !== "function")
      throw new TypeError("defaultValueGenerator must be a function");
    const value = defaultValueGenerator(key, this);
    if (value instanceof Promise) {
      return value.then((v) => {
        this.set(key, v);
        return v;
      });
    }
    this.set(key, value);
    return value;
  }

  public hasAll(...keys: Key[]) {
    return keys.every((key) => this.has(key));
  }

  public hasAny(...keys: Key[]) {
    return keys.some((key) => this.has(key));
  }

  public find<NewValue extends Value>(
    cb: (value: Value, key: Key, registry: this) => value is NewValue
  ): NewValue | undefined;
  public find(
    cb: (value: Value, key: Key, registry: this) => unknown
  ): Value | undefined;
  public find<This, NewValue extends Value>(
    cb: (
      this: This,
      value: Value,
      key: Key,
      registry: this
    ) => value is NewValue,
    thisArg: This
  ): NewValue | undefined;
  public find<This>(
    cb: (this: This, value: Value, key: Key, registry: this) => unknown,
    thisArg: This
  ): Value | undefined;
  public find(
    cb: (value: Value, key: Key, registry: this) => unknown,
    thisArg?: unknown
  ): Value | undefined {
    if (typeof cb !== "function") throw new TypeError("cb must be a function");
    if (thisArg !== undefined) cb = cb.bind(thisArg);
    for (const [key, value] of this) {
      if (cb(value, key, this)) return value;
    }

    return undefined;
  }

  public filter<NewKey extends Key>(
    cb: (value: Value, key: Key, collection: this) => key is NewKey
  ): Registry<NewKey, Value>;
  public filter<NewValue extends Value>(
    cb: (value: Value, key: Key, collection: this) => value is NewValue
  ): Registry<Key, NewValue>;
  public filter(
    cb: (value: Value, key: Key, collection: this) => unknown
  ): Registry<Key, Value>;
  public filter<This, NewKey extends Key>(
    cb: (this: This, value: Value, key: Key, collection: this) => key is NewKey,
    thisArg: This
  ): Registry<NewKey, Value>;
  public filter<This, NewValue extends Value>(
    cb: (
      this: This,
      value: Value,
      key: Key,
      collection: this
    ) => value is NewValue,
    thisArg: This
  ): Registry<Key, NewValue>;
  public filter<This>(
    cb: (this: This, value: Value, key: Key, collection: this) => unknown,
    thisArg: This
  ): Registry<Key, Value>;
  public filter(
    cb: (value: Value, key: Key, collection: this) => unknown,
    thisArg?: unknown
  ): Registry<Key, Value> {
    if (typeof cb !== "function")
      throw new TypeError(`${cb} is not a function`);
    if (thisArg !== undefined) cb = cb.bind(thisArg);
    const results = new Registry<Key, Value>();
    for (const [key, val] of this) {
      if (cb(val, key, this)) results.set(key, val);
    }

    return results;
  }
}

new Registry<string, Guild>();
