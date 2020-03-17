import Keyword from "../Keyword";

export default class KwGreen extends Keyword {
  shouldMatch = ["green", "Green"];
  shouldNotMatch = ["gren", "greeno"];
  check(input: string): boolean {
    return input.toLowerCase() === "green";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.greenBright(input);
    } else {
      return "";
    }
  }
}
