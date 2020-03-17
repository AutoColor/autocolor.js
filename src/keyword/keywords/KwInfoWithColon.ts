import Keyword from "../Keyword";

export default class KwInfoWithColon extends Keyword {
  shouldMatch = ["info:", "Info:"];
  shouldNotMatch = ["info"];
  check(input: string): boolean {
    return input.toLowerCase() === "info:";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.bgCyan(this.color.whiteBright(input));
    } else {
      return "";
    }
  }
}
