import Keyword from "../Keyword";

export default class KwBlue extends Keyword {
  shouldMatch = ["blue", "Blue"];
  shouldNotMatch = ["blu", "blues"];
  check(input: string): boolean {
    return input.toLowerCase() === "blue";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.blueBright(input);
    } else {
      return "";
    }
  }
}
