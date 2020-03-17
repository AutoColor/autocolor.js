import Keyword from "../Keyword";

export default class KwYes extends Keyword {
  shouldMatch = ["yes", "Yes"];
  shouldNotMatch = ["ye", "yess"];
  check(input: string): boolean {
    return input.toLowerCase() === "yes";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.greenBright(input);
    } else {
      return "";
    }
  }
}
