import Keyword from "../Keyword";

export default class KwFinished extends Keyword {
  shouldMatch = ["finished", "Finished"];
  shouldNotMatch = ["finish"];
  check(input: string): boolean {
    return input.toLowerCase() === "finished";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.cyanBright(input);
    } else {
      return "";
    }
  }
}
