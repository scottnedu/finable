// services/ledger.service.ts
import { AccountModel } from '../models/account.model';
import { encrypt, decrypt } from '../utils/encryptionUtils';

export const listAllAccounts = async () => {
  const accounts = await AccountModel.find();

  return accounts.map(account => {
    const fullName = `${account.firstName} ${account.surname}`;

    // Encrypt sensitive fields
    const encryptedCardNumber = account.card ? encrypt(account.card.cardNumber) : null;
    const encryptedCVV = account.card ? encrypt(account.card.cvv) : null;
    const encryptedExpiry = account.card ? encrypt(account.card.expiryDate) : null;
    const encryptedPhone = encrypt(account.phoneNumber);
    const encryptedDOB = encrypt(account.dateOfBirth);

    return {
      accountNumber: account.accountNumber,
      fullName,
      sensitiveFields: {
        cardNumber: encryptedCardNumber ? encryptedCardNumber.encryptedData : null,
        cardNumberIV: encryptedCardNumber ? encryptedCardNumber.iv : null,

        cvv: encryptedCVV ? encryptedCVV.encryptedData : null,
        cvvIV: encryptedCVV ? encryptedCVV.iv : null,

        expiryDate: encryptedExpiry ? encryptedExpiry.encryptedData : null,
        expiryDateIV: encryptedExpiry ? encryptedExpiry.iv : null,

        phoneNumber: encryptedPhone.encryptedData,
        phoneIV: encryptedPhone.iv,

        dateOfBirth: encryptedDOB.encryptedData,
        dobIV: encryptedDOB.iv
      },
      decryptedFields: {
        cardNumber: account.card ? account.card.cardNumber : null,
        cvv: account.card ? account.card.cvv : null,
        expiryDate: account.card ? account.card.expiryDate : null,
        phoneNumber: account.phoneNumber,
        dateOfBirth: account.dateOfBirth
      }
    };
  });
};

export const decryptData = (encryptedData: string, iv: string): string => {
  return decrypt(encryptedData, iv);
};
