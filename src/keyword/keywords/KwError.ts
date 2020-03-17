import Keyword from "../Keyword";

export default class KwError extends Keyword {
  shouldMatch = ["error", "Error", "errored", "Errored"];
  shouldNotMatch = ["errror"];
  check(input: string): boolean {
    input = input.toLowerCase();
    return input === "error" || input == "errored";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.bgRedBright(input);
    } else {
      return "";
    }
  }
}
