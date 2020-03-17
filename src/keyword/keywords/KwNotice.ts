import Keyword from "../Keyword";

export default class KwNotice extends Keyword {
  shouldMatch = ["notice", "Notice"];
  shouldNotMatch = ["note", "notic"];
  check(input: string): boolean {
    return input.toLowerCase() === "notice";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.greenBright(input);
    } else {
      return "";
    }
  }
}
