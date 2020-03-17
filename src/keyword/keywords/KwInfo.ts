import Keyword from "../Keyword";

export default class KwInfo extends Keyword {
  shouldMatch = ["info", "Info"];
  shouldNotMatch = ["inf"];
  check(input: string): boolean {
    return input.toLowerCase() === "info";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.cyanBright(input);
    } else {
      return "";
    }
  }
}
