import Keyword from "../Keyword";

export default class KwDeny extends Keyword {
  shouldMatch = ["deny", "Deny"];
  shouldNotMatch = ["denied", "den"];
  check(input: string): boolean {
    return input.toLowerCase() === "deny";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.yellowBright(input);
    } else {
      return "";
    }
  }
}
