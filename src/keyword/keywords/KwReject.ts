import Keyword from "../Keyword";

export default class KwReject extends Keyword {
  shouldMatch = ["reject", "Reject"];
  shouldNotMatch = ["rejec"];
  check(name: string): boolean {
    return name.toLowerCase() === "reject";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.yellowBright(name);
    } else {
      return "";
    }
  }
}
