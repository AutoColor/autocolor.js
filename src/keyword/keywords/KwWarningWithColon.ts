import Keyword from "../Keyword";

export default class KwWarningWithColon extends Keyword {
  shouldMatch = ["warning:", "Warning:"];
  shouldNotMatch = ["warning"];
  check(input: string): boolean {
    return input.toLowerCase() === "warning:";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.bgYellow(this.color.red(input));
    } else {
      return "";
    }
  }
}
