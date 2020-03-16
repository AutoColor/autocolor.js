import Keyword from "../Keyword";

export default class KwStatusWithColon extends Keyword {
  shouldMatch = ["status:", "Status:"];
  shouldNotMatch = ["status"];
  check(name: string): boolean {
    return name.toLowerCase() === "status:";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.bgBlue(this.color.whiteBright(name));
    } else {
      return "";
    }
  }
}
