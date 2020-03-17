import Keyword from "../Keyword";

export default class KwWaiting extends Keyword {
  shouldMatch = ["waiting", "Waiting"];
  shouldNotMatch = ["wait", "watingg"];
  check(input: string): boolean {
    return input.toLowerCase() === "waiting";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.blueBright(input);
    } else {
      return "";
    }
  }
}
