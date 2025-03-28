import { z } from "zod";

export const targetValidation = z.object({
	targetNumber: z.number({
		required_error: "targetNumber is required",
		invalid_type_error: "target number must be a number",
	}).refine((num) => num > 0, 'targetNumber must be a positive number'),
});