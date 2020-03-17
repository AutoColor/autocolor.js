import Keyword from "../Keyword";

export default class KwErrorWithColon extends Keyword {
  shouldMatch = ["error:", "Error:"];
  shouldNotMatch = ["error"];
  check(input: string): boolean {
    return input.toLowerCase() === "error:";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.bgRed(this.color.whiteBright(input));
    } else {
      return "";
    }
  }
}
