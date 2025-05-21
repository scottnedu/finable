import { AccountModel } from '../models/account.model';
import { IAccount } from '../types/account.types';
import { generateAccountNumber } from '../utils/accountNumber';
import { generateCardNumber, generateCVV, generateExpiryDate } from '../utils/cardUtils';
import { encrypt, decrypt } from '../utils/encryptionUtils';

export const createAccount = async (accountData: Omit<IAccount, 'accountNumber'>): Promise<any> => {
  let accountNumber: string = '';
  let isUnique = false;

  // Ensure unique account number
  while (!isUnique) {
    accountNumber = generateAccountNumber();
    const existing = await AccountModel.findOne({ accountNumber });
    if (!existing) isUnique = true;
  }

  // Generate and encrypt virtual card details
  const rawCard = {                                             //change card to virtual card
    cardNumber: generateCardNumber(),
    cvv: generateCVV(),
    expiryDate: generateExpiryDate(),
  };

  const encryptedCard = {
    cardNumber: encrypt(rawCard.cardNumber),
    cvv: encrypt(rawCard.cvv),
    expiryDate: encrypt(rawCard.expiryDate),
  };

  const encryptedPhone = encrypt(accountData.phoneNumber);
  const encryptedDOB = encrypt(new Date(accountData.dateOfBirth).toISOString());

  const account = new AccountModel({
    ...accountData,
    phoneNumber: encryptedPhone,
    dateOfBirth: encryptedDOB,
    accountNumber,
    card: encryptedCard,               //change card to virtual card
  });

  const savedAccount = await account.save();

  // Return encrypted and decrypted versions for testing
  return {
    encrypted: savedAccount.toObject(),
    decrypted: {
      ...accountData,
      accountNumber,
      phoneNumber: decrypt(savedAccount.phoneNumber),
      dateOfBirth: decrypt(savedAccount.dateOfBirth),
      card: {                                                         //change card to virtual card
        cardNumber: decrypt(savedAccount.card.cardNumber),
        cvv: decrypt(savedAccount.card.cvv),
        expiryDate: decrypt(savedAccount.card.expiryDate),
      },
    }
  };
};
