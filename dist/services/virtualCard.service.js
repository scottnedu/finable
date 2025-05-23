"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachVirtualCard = void 0;
const account_model_1 = require("../models/account.model");
const cardUtils_1 = require("../utils/cardUtils");
const attachVirtualCard = async (accountNumber) => {
    const account = await account_model_1.AccountModel.findOne({ accountNumber });
    if (!account) {
        throw new Error('Account not found');
    }
    // Generate virtual card details
    const virtualCard = {
        cardNumber: (0, cardUtils_1.generateCardNumber)(),
        cvv: (0, cardUtils_1.generateCVV)(),
        expiryDate: (0, cardUtils_1.generateExpiryDate)(),
    };
    // Attach virtual card to the existing account
    account.card = virtualCard;
    const updatedAccount = await account.save();
    return updatedAccount;
};
exports.attachVirtualCard = attachVirtualCard;
