"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
const account_model_1 = require("../models/account.model");
const accountNumber_1 = require("../utils/accountNumber");
const createAccount = async (accountData) => {
    let accountNumber = '';
    let isUnique = false;
    while (!isUnique) {
        accountNumber = (0, accountNumber_1.generateAccountNumber)();
        const existing = await account_model_1.AccountModel.findOne({ accountNumber });
        if (!existing)
            isUnique = true;
    }
    const account = new account_model_1.AccountModel({
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
exports.createAccount = createAccount;
