import KeywordHandler from "./KeywordHandler";

  export function getString(text: string): string {
    return KeywordHandler.getString(text);
  }

  export function log(text: string, ...optionalParams: readonly any[]) {
    if (optionalParams.length >= 1) {
      console.log(getString(text), optionalParams);
    } else {
      console.log(getString(text));
    }
  }

  export function error(text: string, ...optionalParams: readonly any[]) {
    if (optionalParams.length >= 1) {
      console.error(getString(text), optionalParams);
    } else {
      console.error(getString(text));
    }
  }

  export function warn(text: string, ...optionalParams: readonly any[]) {
    if (optionalParams.length >= 1) {
      console.warn(getString(text), optionalParams);
    } else {
      console.warn(getString(text));
    }
  }

  export function debug(text: string, ...optionalParams: readonly any[]) {
    if (optionalParams.length >= 1) {
      console.debug(getString(text), optionalParams);
    } else {
      console.debug(getString(text));
    }
  }
