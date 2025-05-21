// controllers/account.controller.ts
import { Request, Response, NextFunction } from "express";
import { createAccount } from "../services/account.service";
import { IAccount } from "../types/account.types";

export const createAccountHandler = async (
  req: Request<{}, {}, Omit<IAccount, "accountNumber">>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newAccount = await createAccount(req.body);
    res.status(201).json({
      status: "Your account has been created successfully",
      data: newAccount,
    });
  } catch (err) {
    next(err); // let the global error-handler decide
  }
};
