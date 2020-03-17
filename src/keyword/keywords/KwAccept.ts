import Keyword from "../Keyword";

export default class KwAccept extends Keyword {
  shouldMatch = ["accept", "Accept", "accepted", "Accepted"];
  shouldNotMatch = ["acccept"];

  check(input: string): boolean {
    input = input.toLowerCase();
    return input === "accept" || input === "accepted";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.greenBright(input);
    } else {
      return "";
    }
  }
}
