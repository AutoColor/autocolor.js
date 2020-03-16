import Keyword from "../Keyword";

export default class KwFail extends Keyword {
  shouldMatch = ["fail", "Fail"];
  shouldNotMatch = ["fai"]
  check(name: string): boolean {
    return name.toLowerCase() === "fail";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.redBright(name);
    } else {
      return "";
    }
  }
}
