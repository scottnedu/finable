"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptData = exports.listAllAccounts = void 0;
// services/ledger.service.ts
const account_model_1 = require("../models/account.model");
const encryptionUtils_1 = require("../utils/encryptionUtils");
const listAllAccounts = async () => {
    const accounts = await account_model_1.AccountModel.find();
    return accounts.map(account => {
        const fullName = `${account.firstName} ${account.surname}`;
        // Encrypt sensitive fields
        const encryptedCardNumber = account.card ? (0, encryptionUtils_1.encrypt)(account.card.cardNumber) : null;
        const encryptedCVV = account.card ? (0, encryptionUtils_1.encrypt)(account.card.cvv) : null;
        const encryptedExpiry = account.card ? (0, encryptionUtils_1.encrypt)(account.card.expiryDate) : null;
        const encryptedPhone = (0, encryptionUtils_1.encrypt)(account.phoneNumber);
        const encryptedDOB = (0, encryptionUtils_1.encrypt)(account.dateOfBirth);
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
exports.listAllAccounts = listAllAccounts;
const decryptData = (encryptedData, iv) => {
    return (0, encryptionUtils_1.decrypt)(encryptedData, iv);
};
exports.decryptData = decryptData;
