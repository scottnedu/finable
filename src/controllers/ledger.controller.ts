// controllers/ledger.controller.ts
import { Request, Response } from 'express';
import * as ledgerService from '../services/ledger.service';

export const getAllAccounts = async (_req: Request, res: Response) => {
  try {
    const accounts = await ledgerService.listAllAccounts();
    res.json(accounts);
  } catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  res.status(500).json({ message: 'Failed to list accounts', error: message });
    }
}

export const decryptEncryptedData = async (req: Request, res: Response) => {
  try {
    const { encryptedData, iv, label } = req.body;
    if (!encryptedData || !iv) {
    return res.status(400).json({ message: 'encryptedData and iv are required' });
    }

    const decrypted = ledgerService.decryptData(encryptedData, iv);
   
    if (label) {
      return res.json({ [label]: decrypted });
    }
    return res.json({ decrypted })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({ message: 'Failed to decrypt data', error: message });
    }
}
