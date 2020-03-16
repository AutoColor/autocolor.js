import Keyword from "../Keyword";

export default class KwMagenta extends Keyword {
  shouldMatch = ["magenta", "Magenta"];
  shouldNotMatch = ["magent", "magentaa"];
  check(name: string): boolean {
    return name.toLowerCase() === "magenta";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.magentaBright(name);
    } else {
      return "";
    }
  }
}
