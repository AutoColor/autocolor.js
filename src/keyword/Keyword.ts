import { Chalk } from "chalk";
import chalk from "chalk";

export default abstract class Keyword {
  readonly color: Chalk;
  abstract shouldMatch: string[];
  abstract shouldNotMatch: string[]

  constructor() {
    this.color = chalk;
  }

  abstract check(name: string): boolean;
  abstract getColored(name: string): string;
}
