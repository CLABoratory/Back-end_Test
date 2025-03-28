import { Router } from 'express';
import { SquareRootController } from "@/common/square-root/square-root.controller.class";
import { validateRequest } from "@/common/middleware/validationRequest";


const squareRoot = Router();
const squareRootController = new SquareRootController();

squareRoot.post('/calculate', validateRequest, squareRootController.calculation)

export default squareRoot