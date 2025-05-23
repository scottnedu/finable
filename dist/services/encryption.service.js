"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptSensitiveData = void 0;
const account_model_1 = require("../models/account.model");
const encryptionUtils_1 = require("../utils/encryptionUtils");
const encryptSensitiveData = async (accountNumber) => {
    const account = await account_model_1.AccountModel.findOne({ accountNumber });
    if (!account || !account.card) {
        throw new Error('Account or card not found');
    }
    // Encrypt fields
    const encryptedCardNumber = (0, encryptionUtils_1.encrypt)(account.card.cardNumber);
    const encryptedCVV = (0, encryptionUtils_1.encrypt)(account.card.cvv);
    const encryptedExpiry = (0, encryptionUtils_1.encrypt)(account.card.expiryDate);
    const encryptedPhone = (0, encryptionUtils_1.encrypt)(account.phoneNumber);
    const encryptedDOB = (0, encryptionUtils_1.encrypt)(account.dateOfBirth);
    return {
        encrypted: {
            cardNumber: encryptedCardNumber,
            cvv: encryptedCVV,
            expiryDate: encryptedExpiry,
            phoneNumber: encryptedPhone,
            dateOfBirth: encryptedDOB,
        },
        decrypted: {
            cardNumber: (0, encryptionUtils_1.decrypt)(encryptedCardNumber.encryptedData, encryptedCardNumber.iv),
            cvv: (0, encryptionUtils_1.decrypt)(encryptedCVV.encryptedData, encryptedCVV.iv),
            expiryDate: (0, encryptionUtils_1.decrypt)(encryptedExpiry.encryptedData, encryptedExpiry.iv),
            phoneNumber: (0, encryptionUtils_1.decrypt)(encryptedPhone.encryptedData, encryptedPhone.iv),
            dateOfBirth: (0, encryptionUtils_1.decrypt)(encryptedDOB.encryptedData, encryptedDOB.iv),
        },
    };
};
exports.encryptSensitiveData = encryptSensitiveData;
