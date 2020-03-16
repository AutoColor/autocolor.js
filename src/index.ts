import KeywordHandler from "./KeywordHandler";

export default class AutoColor {
  static getString(text: string): string {
    return KeywordHandler.getString(text);
  }

  static log(text: string, ...optionalParams: readonly any[]) {
    if (optionalParams.length >= 1) {
      console.log(this.getString(text), optionalParams);
    } else {
      console.log(this.getString(text));
    }
  }

  static error(text: string, ...optionalParams: readonly any[]) {
    if (optionalParams.length >= 1) {
      console.error(this.getString(text), optionalParams);
    } else {
      console.error(this.getString(text));
    }
  }

  static warn(text: string, ...optionalParams: readonly any[]) {
    if (optionalParams.length >= 1) {
      console.warn(this.getString(text), optionalParams);
    } else {
      console.warn(this.getString(text));
    }
  }

  static debug(text: string, ...optionalParams: readonly any[]) {
    if (optionalParams.length >= 1) {
      console.debug(this.getString(text), optionalParams);
    } else {
      console.debug(this.getString(text));
    }
  }
}
