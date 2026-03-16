import { ZodType } from "zod";
import { Request, Response, NextFunction } from "express";

const validate =
    (schema: ZodType) =>
        (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse(req.body);
                next();
            } catch (error: any) {
                res.status(400).json({
                    success: false,
                    errors: error.issues,
                });
            }
        };

export default validate;
