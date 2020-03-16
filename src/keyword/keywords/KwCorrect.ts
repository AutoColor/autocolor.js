import Keyword from "../Keyword";

export default class KwCorrect extends Keyword {
  shouldMatch = ["correct", "Correct"];
  shouldNotMatch = ["corect"];
  check(name: string): boolean {
    return name.toLowerCase() === "correct";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.greenBright(name);
    } else {
      return "";
    }
  }
}
