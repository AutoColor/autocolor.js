import Keyword from "../Keyword";

export default class KwWaiting extends Keyword {
  shouldMatch = ["waiting", "Waiting"];
  shouldNotMatch = ["wait", "watingg"]
  check(name: string): boolean {
    return name.toLowerCase() === "waiting";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.blueBright(name);
    } else {
      return "";
    }
  }
}
