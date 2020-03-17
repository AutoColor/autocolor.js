import Keyword from "../Keyword";

export default class KwCorrect extends Keyword {
  shouldMatch = ["correct", "Correct", "corrected", "Corrected"];
  shouldNotMatch = ["corect"];
  check(input: string): boolean {
    input = input.toLowerCase()
    return input === "correct" || input === "corrected";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.greenBright(input);
    } else {
      return "";
    }
  }
}
