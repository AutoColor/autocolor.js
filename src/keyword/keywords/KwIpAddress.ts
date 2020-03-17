import Keyword from "../Keyword";
import isIp from "ip-regex";

export default class KwIpAddress extends Keyword {
  shouldMatch = ["127.0.0.1", "0.0.0.0", "255.255.255.255", "1.1.1.1", "::1", "2001:db8::1", "2001:db8::2:1", "2001:db8:0:1:1:1:1:1"];
  shouldNotMatch = ["333.333.333.333", "-1.-1.-1.-1"];
  check(input: string): boolean {
    return isIp().test(input);
  }

  getColored(input: string): string {
    if (this.check(input)) {
      return this.color.magentaBright(input);
    } else {
      return "";
    }
  }
}
