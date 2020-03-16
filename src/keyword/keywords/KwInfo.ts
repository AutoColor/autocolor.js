import Keyword from "../Keyword";

export default class KwInfo extends Keyword {
  shouldMatch = ["info", "Info"];
  shouldNotMatch = ["inf"]
  check(name: string): boolean {
    return name.toLowerCase() === "info";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.cyanBright(name);
    } else {
      return "";
    }
  }
}
