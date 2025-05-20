import { AccountModel } from '../models/account.model';
import { IAccount } from '../types/account.types';
import { generateAccountNumber } from '../utils/accountNumber';
import {generateCardNumber, generateCVV, generateExpiryDate} from '../utils/cardUtils';

export const createAccount = async (accountData: Omit<IAccount, 'accountNumber'>): Promise<IAccount> => {
  let accountNumber: string = '';
  let isUnique = false;

  //To ensure unique account number
  while (!isUnique) {
    accountNumber = generateAccountNumber();
    const existing = await AccountModel.findOne({ accountNumber });
    if (!existing) isUnique = true;
  }

  // Generate virtual card details
  const card = {
    cardNumber: generateCardNumber(),
    cvv: generateCVV(),
    expiryDate: generateExpiryDate(),
  };

  const account = new AccountModel({
    ...accountData,
    accountNumber,
    card,
  });

  const savedAccount = await account.save();
  return savedAccount.toObject();
};
