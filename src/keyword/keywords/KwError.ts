import Keyword from "../Keyword";

export default class KwError extends Keyword {
  shouldMatch = ["error", "Error"];
  shouldNotMatch = ["errror"];
  check(name: string): boolean {
    return name.toLowerCase() === "error";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.bgRedBright(name);
    } else {
      return "";
    }
  }
}
