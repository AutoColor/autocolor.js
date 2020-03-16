import Keyword from "../Keyword";

export default class KwSuccessWithColon extends Keyword {
  shouldMatch = ["success:", "Success:"];
  shouldNotMatch = ["success"]
  check(name: string): boolean {
    return name.toLowerCase() === "success:";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.bgGreen(this.color.whiteBright(name))
    } else {
      return "";
    }
  }
}
