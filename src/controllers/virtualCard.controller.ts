import { Request, Response, NextFunction } from 'express';
import { attachVirtualCard } from '../services/virtualCard.service';


export const attachVirtualCardController = async (
  req: Request<{ accountNumber: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { accountNumber } = req.params;
    const updatedAccount = await attachVirtualCard(accountNumber);
    res.status(200).json({
      status: 'success',
      data: updatedAccount,
    });
  } catch (err: unknown) {
    if (err instanceof Error) next(err);
    else next(new Error('Unknown error occurred'));
  }
};
