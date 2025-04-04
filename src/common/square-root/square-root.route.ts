import { Router } from 'express'
import squareRootController from '@/common/square-root/square-root.controller.class'
import { validateRequest } from '@/common/middleware/validationRequest'

const squareRoot = Router()

squareRoot.post('/calculate', validateRequest, squareRootController.calculation)

export default squareRoot
