import Keyword from "../Keyword";

export default class KwNo extends Keyword {
  shouldMatch = ["no", "No"];
  shouldNotMatch = ["nope", "none"];
  check(input: string): boolean {
    return input.toLowerCase() === "no";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.redBright(input);
    } else {
      return "";
    }
  }
}
