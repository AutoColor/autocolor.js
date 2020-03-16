import Keyword from "../Keyword";

export default class KwFinished extends Keyword {
  shouldMatch = ["finished", "Finished"];
  shouldNotMatch = ["finish"]
  check(name: string): boolean {
    return name.toLowerCase() === "finished";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.cyanBright(name);
    } else {
      return "";
    }
  }
}
