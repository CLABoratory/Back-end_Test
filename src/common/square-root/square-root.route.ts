import { Router } from 'express';
import { SquareRootController } from "@/common/square-root/square-root.controller.class";
import { validateRequest } from "@/common/middleware/validationRequest";


const squareRoot = Router();

squareRoot.post('/calculate', validateRequest, SquareRootController.calculation)

export default squareRoot