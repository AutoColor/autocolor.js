import Keyword from "../Keyword";

export default class KwDenied extends Keyword {
  shouldMatch = ["denied", "Denied"];
  shouldNotMatch = ["deny", "denie"];
  check(input: string): boolean {
    return input.toLowerCase() === "denied";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.yellowBright(input);
    } else {
      return "";
    }
  }
}
