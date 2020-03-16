import Keyword from "../Keyword";

export default class KwYes extends Keyword {
  shouldMatch = ["yes", "Yes"];
  shouldNotMatch = ["ye", "yess"];
  check(name: string): boolean {
    return name.toLowerCase() === "yes";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.greenBright(name);
    } else {
      return "";
    }
  }
}
