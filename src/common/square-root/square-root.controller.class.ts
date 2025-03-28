import {NewtonRaphsonAlgorithm, SqrtCalculator} from "./service";
import {handleServiceResponse} from "@/common/utils/httpHandlers";
import {ServiceResponse} from "@/common/utils/serviceResponse";
import {StatusCodes} from "http-status-codes";
import type {RequestBodyType} from "@/common/types/request-body.type";
import type {Response} from "express";
import type {SquareRootType, Target} from "@/common/types";
import {Message} from "./enums";
import {cache} from "@/common/utils/cache";


export class SquareRootController {

    calculation(req: RequestBodyType<Target>, res: Response) {
        const { targetNumber } = req.body;
        const statusCode = StatusCodes.CREATED;
        let response: ServiceResponse<SquareRootType>;

        if(cache.has(targetNumber)) {
            const result = cache.get(targetNumber) as SquareRootType;

            response = ServiceResponse.success<SquareRootType>(Message.CALCULATION, result, statusCode);

        } else {
            const result = new SqrtCalculator(targetNumber, new NewtonRaphsonAlgorithm()).calculate();
            response = ServiceResponse.success<SquareRootType>(Message.CALCULATION, result, statusCode);
            cache.set(targetNumber, result);
        }

        handleServiceResponse(response, res);
    }
}

