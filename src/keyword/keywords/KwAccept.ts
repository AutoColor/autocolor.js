import Keyword from "../Keyword";

export default class KwAccept extends Keyword {
  shouldMatch = ["accept", "Accept"];
  shouldNotMatch = ["acccept"]
  check(name: string): boolean {
    return name.toLowerCase() === "accept";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.greenBright(name);
    } else {
      return "";
    }
  }
}
