import Keywords from "./keyword/keywords";

export default class KeywordHandler {
  static getString(input: string): string {
    const parts = input.split(" ");
    let out = "";

    parts.forEach(part => {
      let colored: string = "";

      for (const keyword of Keywords.getRegistered()) {
        if (colored.length === 0) colored = keyword.getColored(part);
      }

      if (colored === "") {
        out += part;
      } else {
        out += colored;
      }

      out += " ";
    });

    return out;
  }
}
