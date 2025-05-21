"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
const account_model_1 = require("../models/account.model");
const accountNumber_1 = require("../utils/accountNumber");
const cardUtils_1 = require("../utils/cardUtils");
const encryptionUtils_1 = require("../utils/encryptionUtils");
const createAccount = async (accountData) => {
    let accountNumber = '';
    let isUnique = false;
    // Ensure unique account number
    while (!isUnique) {
        accountNumber = (0, accountNumber_1.generateAccountNumber)();
        const existing = await account_model_1.AccountModel.findOne({ accountNumber });
        if (!existing)
            isUnique = true;
    }
    // Generate and encrypt virtual card details
    const rawCard = {
        cardNumber: (0, cardUtils_1.generateCardNumber)(),
        cvv: (0, cardUtils_1.generateCVV)(),
        expiryDate: (0, cardUtils_1.generateExpiryDate)(),
    };
    const encryptedCard = {
        cardNumber: (0, encryptionUtils_1.encrypt)(rawCard.cardNumber),
        cvv: (0, encryptionUtils_1.encrypt)(rawCard.cvv),
        expiryDate: (0, encryptionUtils_1.encrypt)(rawCard.expiryDate),
    };
    const encryptedPhone = (0, encryptionUtils_1.encrypt)(accountData.phoneNumber);
    const encryptedDOB = (0, encryptionUtils_1.encrypt)(new Date(accountData.dateOfBirth).toISOString());
    const account = new account_model_1.AccountModel({
        ...accountData,
        phoneNumber: encryptedPhone,
        dateOfBirth: encryptedDOB,
        accountNumber,
        card: encryptedCard, //change card to virtual card
    });
    const savedAccount = await account.save();
    // Return encrypted and decrypted versions for testing
    return {
        encrypted: savedAccount.toObject(),
        decrypted: {
            ...accountData,
            accountNumber,
            phoneNumber: (0, encryptionUtils_1.decrypt)(savedAccount.phoneNumber),
            dateOfBirth: (0, encryptionUtils_1.decrypt)(savedAccount.dateOfBirth),
            card: {
                cardNumber: (0, encryptionUtils_1.decrypt)(savedAccount.card.cardNumber),
                cvv: (0, encryptionUtils_1.decrypt)(savedAccount.card.cvv),
                expiryDate: (0, encryptionUtils_1.decrypt)(savedAccount.card.expiryDate),
            },
        }
    };
};
exports.createAccount = createAccount;
