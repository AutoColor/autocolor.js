import Keyword from "../Keyword";

export default class KwFail extends Keyword {
  shouldMatch = ["fail", "Fail", "failed", "Failed"];
  shouldNotMatch = ["fai"];
  check(input: string): boolean {
    input = input.toLowerCase();
    return input === "fail" || input === "failed";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.redBright(input);
    } else {
      return "";
    }
  }
}
