import { Request, Response, NextFunction } from 'express';
import { encryptSensitiveData } from '../services/encryption.service';

export const encryptDataHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accountNumber } = req.params;
    const result = await encryptSensitiveData(accountNumber);
    res.status(200).json({
      status: 'success',
      message: 'Iyanda, for testing purpose, I have returned both your encrypted and decrypted data',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
