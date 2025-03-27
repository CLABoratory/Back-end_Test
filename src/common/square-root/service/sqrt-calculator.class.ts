import { Calculator } from "../interfaces";
import { SqrtAlgorithm } from "./sqrt-algorythm.a-class";
import {SquareRootType} from "@/common/types";

export class SqrtCalculator implements Calculator {
  private result: number = 0;

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
