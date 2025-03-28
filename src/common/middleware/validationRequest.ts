import type {NextFunction, Request, Response} from "express";
import {targetValidation} from "@/common/utils/targetValidation";
import type {ZodError} from "zod";
import {StatusCodes} from "http-status-codes";
import {ServiceResponse} from "@/common/utils/serviceResponse";
import {handleServiceResponse} from "@/common/utils/httpHandlers";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    try {
        targetValidation.parse(req.body);
        next();
    } catch (err) {
        const errorMessage = `Invalid input: ${(err as ZodError).errors.map((e) => e.message).join(", ")}`;
        const statusCode = StatusCodes.BAD_REQUEST;
        const serviceResponse = ServiceResponse.failure(errorMessage, null, statusCode);
        handleServiceResponse(serviceResponse, res);
    }
};