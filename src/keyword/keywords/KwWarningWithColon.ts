import Keyword from "../Keyword";

export default class KwWarningWithColon extends Keyword {
  shouldMatch = ["warning:", "Warning:"];
  shouldNotMatch = ["warning"];
  check(name: string): boolean {
    return name.toLowerCase() === "warning:";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.bgYellow(this.color.whiteBright(name));
    } else {
      return "";
    }
  }
}
