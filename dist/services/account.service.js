"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
const account_model_1 = require("../models/account.model");
const accountNumber_1 = require("../utils/accountNumber");
const cardUtils_1 = require("../utils/cardUtils");
const createAccount = async (accountData) => {
    let accountNumber = '';
    let isUnique = false;
    //To ensure unique account number
    while (!isUnique) {
        accountNumber = (0, accountNumber_1.generateAccountNumber)();
        const existing = await account_model_1.AccountModel.findOne({ accountNumber });
        if (!existing)
            isUnique = true;
    }
    // Generate virtual card details
    const card = {
        cardNumber: (0, cardUtils_1.generateCardNumber)(),
        cvv: (0, cardUtils_1.generateCVV)(),
        expiryDate: (0, cardUtils_1.generateExpiryDate)(),
    };
    const account = new account_model_1.AccountModel({
        ...accountData,
        accountNumber,
        card,
    });
    const savedAccount = await account.save();
    return savedAccount.toObject();
};
exports.createAccount = createAccount;
