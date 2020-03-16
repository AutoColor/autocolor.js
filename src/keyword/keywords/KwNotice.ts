import Keyword from "../Keyword";

export default class KwNotice extends Keyword {
  shouldMatch = ["notice", "Notice"];
  shouldNotMatch = ["note", "notic"];
  check(name: string): boolean {
    return name.toLowerCase() === "notice";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.greenBright(name);
    } else {
      return "";
    }
  }
}
