import Keyword from "../Keyword";

export default class KwReject extends Keyword {
  shouldMatch = ["reject", "Reject"];
  shouldNotMatch = ["rejec"];
  check(input: string): boolean {
    return input.toLowerCase() === "reject";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.yellowBright(input);
    } else {
      return "";
    }
  }
}
