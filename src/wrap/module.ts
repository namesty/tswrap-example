import * as Types from "./types";

export class Args_foo {
  bar: Types.Bar;
}

export abstract class ModuleBase {
  abstract foo(args: Args_foo): string;
}
