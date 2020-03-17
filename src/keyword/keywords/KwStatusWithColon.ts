import Keyword from "../Keyword";

export default class KwStatusWithColon extends Keyword {
  shouldMatch = ["status:", "Status:"];
  shouldNotMatch = ["status"];
  check(input: string): boolean {
    return input.toLowerCase() === "status:";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.bgBlue(this.color.whiteBright(input));
    } else {
      return "";
    }
  }
}
