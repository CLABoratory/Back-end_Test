import { Router } from 'express';
import {SquareRootController} from "@/common/square-root/square-root.controller.class";

const squareRoot = Router();

squareRoot.post('/calculate', SquareRootController.calculation)

export default squareRoot