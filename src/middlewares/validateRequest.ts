import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
     console.log("🚀 Validating input on route:", req.path);
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
    const messages = error.details.map(err => err.message);
      res.status(400).json({
        status: "error",
        message: messages,
      });
    } else {
      next();
    }
  };
};
