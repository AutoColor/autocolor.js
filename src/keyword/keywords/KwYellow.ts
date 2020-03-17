import Keyword from "../Keyword";

export default class KwYellow extends Keyword {
  shouldMatch = ["yellow", "Yellow"];
  shouldNotMatch = ["yelow", "yelloww"];
  check(input: string): boolean {
    return input.toLowerCase() === "yellow";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.yellowBright(input);
    } else {
      return "";
    }
  }
}
