import Keyword from "../Keyword";

export default class KwFinish extends Keyword {
  shouldMatch = ["finish", "Finish", "finished", "Finished"];
  shouldNotMatch = ["finis"];
  check(input: string): boolean {
    input = input.toLowerCase();
    return input === "finish" || input === "finished";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.cyanBright(input);
    } else {
      return "";
    }
  }
}
