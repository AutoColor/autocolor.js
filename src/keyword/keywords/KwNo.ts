import Keyword from "../Keyword";

export default class KwNo extends Keyword {
  shouldMatch = ["no", "No"];
  shouldNotMatch = ["nope", "none"]
  check(name: string): boolean {
    return name.toLowerCase() === "no";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.redBright(name);
    } else {
      return "";
    }
  }
}
