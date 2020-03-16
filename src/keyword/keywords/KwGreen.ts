import Keyword from "../Keyword";

export default class KwGreen extends Keyword {
  shouldMatch = ["green", "Green"];
  shouldNotMatch = ["gren", "greeno"];
  check(name: string): boolean {
    return name.toLowerCase() === "green";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.greenBright(name);
    } else {
      return "";
    }
  }
}
