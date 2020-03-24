import Keyword from "../Keyword";

export default class KwRemove extends Keyword {
  shouldMatch = [
    "remove",
    "Remove",
    "removed",
    "Removed",
    "removing",
    "Removing"
  ];
  shouldNotMatch = ["remov"];
  check(input: string): boolean {
    input = input.toLowerCase();
    return input === "remove" || input === "Remove" || input == "removed" || input == "Removed" || input == "removing" || input == "Removing";
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.redBright(input);
    } else {
      return "";
    }
  }
}
