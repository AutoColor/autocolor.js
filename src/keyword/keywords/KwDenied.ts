import Keyword from "../Keyword";

export default class KwDenied extends Keyword {
  shouldMatch = ["denied", "Denied"];
  shouldNotMatch = ["deny", "denie"]
  check(name: string): boolean {
    return name.toLowerCase() === "denied";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.yellowBright(name);
    } else {
      return "";
    }
  }
}
