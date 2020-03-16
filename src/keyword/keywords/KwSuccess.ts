import Keyword from "../Keyword";

export default class KwSuccess extends Keyword {
  shouldMatch = ["success", "Success"];
  shouldNotMatch = ["succe"];
  check(name: string): boolean {
    return name.toLowerCase() === "success";
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.greenBright(name);
    } else {
      return "";
    }
  }
}
