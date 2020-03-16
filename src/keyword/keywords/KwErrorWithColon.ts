import Keyword from "../Keyword";

export default class KwErrorWithColon extends Keyword {
  shouldMatch = ["error:", "Error:"];
  shouldNotMatch = ["error"]
  check(name: string): boolean {
    return name.toLowerCase() === "error:";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.bgRed(this.color.whiteBright(name));
    } else {
      return "";
    }
  }
}
