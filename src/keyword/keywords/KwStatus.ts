import Keyword from "../Keyword";

export default class KwStatus extends Keyword {
  shouldMatch = ["status", "Status"];
  shouldNotMatch = ["stat"];
  check(input: string): boolean {
    return input.toLowerCase() === "status";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.blueBright(input);
    } else {
      return "";
    }
  }
}
