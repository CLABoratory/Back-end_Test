import { NewtonRaphsonAlgorithm, SqrtCalculator } from './service'
import { handleServiceResponse } from '@/common/utils/httpHandlers'
import { ServiceResponse } from '@/common/utils/serviceResponse'
import { StatusCodes } from 'http-status-codes'
import type { RequestBodyType } from '@/common/types/request-body.type'
import type { Response } from 'express'
import type { SquareRootType, Target } from '@/common/types'
import { Message } from './enums'
import { cache } from '@/common/utils/cache'

class SquareRootController {
  calculation(req: RequestBodyType<Target>, res: Response) {
    const { targetNumber } = req.body
    const statusCode = StatusCodes.CREATED
    let calculationResult: SquareRootType

    if (cache.has(targetNumber)) {
      calculationResult = cache.get(targetNumber) as SquareRootType
    } else {
      const algorithm = new NewtonRaphsonAlgorithm()
      const sqrtCalculator = new SqrtCalculator(targetNumber, algorithm)
      calculationResult = sqrtCalculator.calculate()

      cache.set(targetNumber, calculationResult)
    }

    const response = ServiceResponse.success<SquareRootType>(
      Message.CALCULATION,
      calculationResult,
      statusCode
    )
    handleServiceResponse(response, res)
  }
}

export default new SquareRootController()
