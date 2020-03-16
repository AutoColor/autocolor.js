import Keyword from "../Keyword";

export default class KwDelete extends Keyword {
  shouldMatch = ["delete", "Delete"];
  shouldNotMatch = ["delet"];
  check(name: string): boolean {
    return name.toLowerCase() === "delete";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.redBright(name);
    } else {
      return "";
    }
  }
}
