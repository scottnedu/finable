import { AccountModel } from '../models/account.model';
import { generateCardNumber, generateCVV, generateExpiryDate } from '../utils/cardUtils';

export const attachVirtualCard = async (accountNumber: string): Promise<any> => {
  const account = await AccountModel.findOne({ accountNumber });

  if (!account) {
    throw new Error('Account not found');
  }

  // Generate virtual card details
  const virtualCard = {
    cardNumber: generateCardNumber(),
    cvv: generateCVV(),
    expiryDate: generateExpiryDate(),
  };

  // Attach virtual card to the existing account
  account.card = virtualCard;
  const updatedAccount = await account.save();

  return updatedAccount;
};
