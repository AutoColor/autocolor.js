import Keyword from "../Keyword";

export default class KwMagenta extends Keyword {
  shouldMatch = ["magenta", "Magenta"];
  shouldNotMatch = ["magent", "magentaa"];
  check(input: string): boolean {
    return input.toLowerCase() === "magenta";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.magentaBright(input);
    } else {
      return "";
    }
  }
}
