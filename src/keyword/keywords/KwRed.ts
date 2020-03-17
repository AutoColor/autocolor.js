import Keyword from "../Keyword";

export default class KwRed extends Keyword {
  shouldMatch = ["red", "Red"];
  shouldNotMatch = ["NodeRed", "Redstone"];
  check(input: string): boolean {
    return input.toLowerCase() === "red";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.redBright(input);
    } else {
      return "";
    }
  }
}
