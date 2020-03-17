import Keyword from "../Keyword";

export default class KwWarn extends Keyword {
  shouldMatch = ["warn", "Warn"];
  shouldNotMatch = ["war"];
  check(input: string): boolean {
    return input.toLowerCase() === "warn";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.yellowBright(input);
    } else {
      return "";
    }
  }
}
