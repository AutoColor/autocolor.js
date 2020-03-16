import Keyword from "../Keyword";

export default class KwStatus extends Keyword {
  shouldMatch = ["status", "Status"];
  shouldNotMatch = ["stat"];
  check(name: string): boolean {
    return name.toLowerCase() === "status";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.blueBright(name);
    } else {
      return "";
    }
  }
}
