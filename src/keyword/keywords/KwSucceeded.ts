import Keyword from "../Keyword";

export default class KwSucceeded extends Keyword {
  shouldMatch = ["succeeded", "Succeeded"];
  shouldNotMatch = ["success"];
  check(name: string): boolean {
    return name.toLowerCase() === "succeeded";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.greenBright(name);
    } else {
      return "";
    }
  }
}
