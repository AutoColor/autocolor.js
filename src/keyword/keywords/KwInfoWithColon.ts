import Keyword from "../Keyword";

export default class KwInfoWithColon extends Keyword {
  shouldMatch = ["info:", "Info:"];
  shouldNotMatch = ["info"]
  check(name: string): boolean {
    return name.toLowerCase() === "info:";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.bgCyan(this.color.whiteBright(name))
    } else {
      return "";
    }
  }
}
