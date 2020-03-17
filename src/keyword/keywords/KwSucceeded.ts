import Keyword from "../Keyword";

export default class KwSucceeded extends Keyword {
  shouldMatch = ["succeeded", "Succeeded", "succeed", "Succeed"];
  shouldNotMatch = ["success"];
  check(input: string): boolean {
    input = input.toLowerCase();
    return input === "succeeded" || input === "succeed";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.greenBright(input);
    } else {
      return "";
    }
  }
}
