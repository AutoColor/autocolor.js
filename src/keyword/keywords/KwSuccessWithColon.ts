import Keyword from "../Keyword";

export default class KwSuccessWithColon extends Keyword {
  shouldMatch = ["success:", "Success:"];
  shouldNotMatch = ["success"];
  check(input: string): boolean {
    return input.toLowerCase() === "success:";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.bgGreen(this.color.whiteBright(input));
    } else {
      return "";
    }
  }
}
