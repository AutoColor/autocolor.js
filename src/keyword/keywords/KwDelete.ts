import Keyword from "../Keyword";

export default class KwDelete extends Keyword {
  shouldMatch = ["delete", "Delete", "deleted", "Deleted"];
  shouldNotMatch = ["delet"];
  check(input: string): boolean {
    input = input.toLowerCase()
    return input === "delete" || input === "deleted";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.redBright(input);
    } else {
      return "";
    }
  }
}
