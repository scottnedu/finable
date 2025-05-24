// src/middlewares/validateRequest.ts
import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
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
