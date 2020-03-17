import Keyword from "../Keyword";

export default class KwSucceeded extends Keyword {
  shouldMatch = ["succeeded", "Succeeded"];
  shouldNotMatch = ["success"];
  check(input: string): boolean {
    return input.toLowerCase() === "succeeded";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.greenBright(input);
    } else {
      return "";
    }
  }
}
