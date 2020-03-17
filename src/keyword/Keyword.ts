import { Chalk } from "chalk";
import chalk from "chalk";

export default abstract class Keyword {
  readonly color: Chalk;
  abstract shouldMatch: string[];
  abstract shouldNotMatch: string[];

  constructor() {
    this.color = chalk;
  }

  abstract check(input: string): boolean;
  abstract getColored(input: string): string;
}
