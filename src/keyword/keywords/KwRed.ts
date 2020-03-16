import Keyword from "../Keyword";

export default class KwRed extends Keyword {
  shouldMatch = ["red", "Red"];
  shouldNotMatch = ["NodeRed", "Redstone"]
  check(name: string): boolean {
    return name.toLowerCase() === "red";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.redBright(name);
    } else {
      return "";
    }
  }
}
