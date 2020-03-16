import Keyword from "../Keyword";

export default class KwWarn extends Keyword {
  shouldMatch = ["warn", "Warn"];
  shouldNotMatch = ["war"]
  check(name: string): boolean {
    return name.toLowerCase() === "warn";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.yellowBright(name);
    } else {
      return "";
    }
  }
}
