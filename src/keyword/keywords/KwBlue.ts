import Keyword from "../Keyword";

export default class KwBlue extends Keyword {
  shouldMatch = ["blue", "Blue"];
  shouldNotMatch = ["blu", "blues"];
  check(name: string): boolean {
    return name.toLowerCase() === "blue";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.blueBright(name);
    } else {
      return "";
    }
  }
}
