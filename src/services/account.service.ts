// services/account.service.ts

import { AccountModel } from '../models/account.model';
import { IAccount } from '../types/account.types';
import { generateAccountNumber } from '../utils/accountNumber';

export const createAccount = async (accountData: Omit<IAccount, 'accountNumber'>): Promise<IAccount> => {
  let accountNumber: string = '';
  let isUnique = false;

  // Keep generating until we get a unique account number
  while (!isUnique) {
    accountNumber = generateAccountNumber();
    const existing = await AccountModel.findOne({ accountNumber });
    if (!existing) isUnique = true;
  }

  const account = new AccountModel({
    ...accountData,
    accountNumber,
  });

  const savedAccount = await account.save();
  return savedAccount.toObject();
};
