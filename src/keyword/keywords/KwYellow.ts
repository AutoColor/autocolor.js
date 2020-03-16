import Keyword from "../Keyword";

export default class KwYellow extends Keyword {
  shouldMatch = ["yellow", "Yellow"];
  shouldNotMatch = ["yelow", "yelloww"];
  check(name: string): boolean {
    return name.toLowerCase() === "yellow";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.yellowBright(name);
    } else {
      return "";
    }
  }
}
