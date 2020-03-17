import Keyword from "../Keyword";

export default class KwSuccess extends Keyword {
  shouldMatch = ["success", "Success"];
  shouldNotMatch = ["succe"];
  check(input: string): boolean {
    return input.toLowerCase() === "success";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.greenBright(input);
    } else {
      return "";
    }
  }
}
