import { AccountModel } from '../models/account.model';
import { encrypt, decrypt } from '../utils/encryptionUtils';

export const encryptSensitiveData = async (accountNumber: string) => {
  const account = await AccountModel.findOne({ accountNumber });

  if (!account || !account.card) {
    throw new Error('Account or card not found');
  }

  // Encrypt fields
  const encryptedCardNumber = encrypt(account.card.cardNumber);
  const encryptedCVV = encrypt(account.card.cvv);
  const encryptedExpiry = encrypt(account.card.expiryDate);
  const encryptedPhone = encrypt(account.phoneNumber);
  const encryptedDOB = encrypt(account.dateOfBirth);

  return {
    encrypted: {
      cardNumber: encryptedCardNumber,
      cvv: encryptedCVV,
      expiryDate: encryptedExpiry,
      phoneNumber: encryptedPhone,
      dateOfBirth: encryptedDOB,
    },
    decrypted: {
      cardNumber: decrypt(encryptedCardNumber.encryptedData, encryptedCardNumber.iv),
      cvv: decrypt(encryptedCVV.encryptedData, encryptedCVV.iv),
      expiryDate: decrypt(encryptedExpiry.encryptedData, encryptedExpiry.iv),
      phoneNumber: decrypt(encryptedPhone.encryptedData, encryptedPhone.iv),
      dateOfBirth: decrypt(encryptedDOB.encryptedData, encryptedDOB.iv),
    },
  };
};
