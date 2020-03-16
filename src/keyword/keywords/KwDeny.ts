import Keyword from "../Keyword";

export default class KwDeny extends Keyword {
  shouldMatch = ["deny", "Deny"];
  shouldNotMatch = ["denied", "den"];
  check(name: string): boolean {
    return name.toLowerCase() === "deny";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.yellowBright(name);
    } else {
      return "";
    }
  }
}
