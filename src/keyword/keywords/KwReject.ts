import Keyword from "../Keyword";

export default class KwReject extends Keyword {
  shouldMatch = ["reject", "Reject", "rejected", "Rejected"];
  shouldNotMatch = ["rejec"];
  check(input: string): boolean {
    input = input.toLowerCase();
    return input === "reject" || input === "rejected";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.yellowBright(input);
    } else {
      return "";
    }
  }
}
