// import { Request, Response, NextFunction } from "express";
// import { createAccount } from "../services/account.service";
// import { IAccount } from "../types/account.types";
// import mongoose from "mongoose";

// export const createAccountHandler = async (
//   req: Request<{}, {}, Omit<IAccount, "accountNumber">>,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const newAccount = await createAccount(req.body);
//     res.status(201).json({
//       status: "success",
//       message: "Your account has been created successfully",
//       data: newAccount,
//     });
//   } catch (err) {
//     if (err instanceof Error) {
//       err.message = `Failed to create account: ${err.message}`;
//       next(err);
//     } else {
//       next(new Error("An unknown error occurred"));
//     }
//   }
// };

import { Request, Response, NextFunction } from "express";
import { createAccount } from "../services/account.service";
import { IAccount } from "../types/account.types";
import mongoose from "mongoose";

export const createAccountHandler = async (
  req: Request<{}, {}, Omit<IAccount, "accountNumber">>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Extra safety: Handle empty body
    if (!req.body || Object.keys(req.body).length === 0) {
      res.status(400).json({
        status: "error",
        message: "Request body cannot be empty.",
      });
      return;
    }

    const newAccount = await createAccount(req.body);

    res.status(201).json({
      status: "success",
      message: "Your account has been created successfully",
      data: newAccount,
    });
  } catch (err: any) {
    // Mongoose validation error
    if (err instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(err.errors).map((e: any) => e.message);
      res.status(400).json({
        status: "error",
        message: errors,
      });
      return;
    }

    // Fallback for other errors
    next(new Error("Failed to create account: " + err?.message));
  }
};
