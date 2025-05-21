// controllers/account.controller.ts
import { Request, Response, NextFunction } from "express";
import { createAccount } from "../services/account.service";
import { IAccount } from "../types/account.types";
import { revealAllAccounts } from "../services/account.service";
import { decryptAccountData } from "../services/account.service";
import { EncryptedAccountData } from "../types/account.types";

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

export const revealAllAccountsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await revealAllAccounts();
    res.status(200).json({
      message: "All accounts with encrypted and decrypted sensitive fields",
      data
    });
  } catch (err) {
    next(err);
  }
};

export const decryptAccountHandler = async (
  req: Request<{}, {}, EncryptedAccountData>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const decrypted = decryptAccountData(req.body);
    res.status(200).json({
      message: "Decryption successful",
      data: decrypted,
    });
  } catch (error) {
    next(error);
  }
};
