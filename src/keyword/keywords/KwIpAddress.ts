import Keyword from "../Keyword";
import isIp from 'ip-regex'

export default class KwIpAddress extends Keyword {
  shouldMatch = ["127.0.0.1", "0.0.0.0", "255.255.255.255", "1.1.1.1"];
  shouldNotMatch = ["333.333.333.333", "-1.-1.-1.-1"]
  check(name: string): boolean {
    return isIp().test(name);
  }

  getColored(name: string): string {
    if (this.check(name)) {
      return this.color.magentaBright(name);
    } else {
      return "";
    }
  }
}
