import { AccountModel } from '../models/account.model';
import { IAccount } from '../types/account.types';
import { generateAccountNumber } from '../utils/accountNumber';

type CreatedAccountResponse = {
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  accountNumber: string;
};

export const createAccount = async (accountData: Omit<IAccount, 'accountNumber'>): Promise<CreatedAccountResponse> => {
  let accountNumber: string = '';
  let isUnique = false;

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

  return {
    firstName: savedAccount.firstName,
    surname: savedAccount.surname,
    email: savedAccount.email,
    phoneNumber: savedAccount.phoneNumber,
    dateOfBirth: savedAccount.dateOfBirth,
    accountNumber: savedAccount.accountNumber,
  };
};
