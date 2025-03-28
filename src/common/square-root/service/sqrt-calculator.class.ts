import type { Calculator } from "../interfaces";
import type { SqrtAlgorithm } from "./sqrt-algorythm.a-class";
import type {SquareRootType} from "@/common/types";

export class SqrtCalculator implements Calculator {
  private result = 0;

  constructor(
    private readonly number: number,
    private readonly algorithm: SqrtAlgorithm
  ) {
    this.algorithm.setTarget(this.number);
  }

  calculate(): SquareRootType {
    this.result = this.algorithm.process();
    return {
      result: this.result
    };
  }
}
