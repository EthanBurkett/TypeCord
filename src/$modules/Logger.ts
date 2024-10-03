import chalk from "chalk";
import dayjs from "dayjs";
import { ClientSetup } from "#/Client";

export default class Logger {
  private static format = "YYYY-MM-DD hh:mm:ss A";
  private clientSetup: ClientSetup;

  constructor(clientSetup: ClientSetup) {
    this.clientSetup = clientSetup;
  }

  public raw(...args: any[]) {
    console.log(...args);
  }

  public debug(...message: any[]) {
    if (!this.clientSetup.debug) return;
    console.debug(
      `${chalk.magenta(`[${dayjs().format(Logger.format)}] [DEBUG]`)} ${message}`,
    );
  }

  public info(...message: any[]) {
    console.info(
      `${chalk.blue(`[${dayjs().format(Logger.format)}] [INFO]`)} ${message}`,
    );
  }

  public warn(message: string) {
    console.warn(
      `${chalk.yellow(`[${dayjs().format(Logger.format)}] [WARN]`)} ${message}`,
    );
  }

  public error(message: string) {
    console.trace(
      `${chalk.red(`[${dayjs().format(Logger.format)}] [ERROR]`)} ${message}`,
    );
  }
}
