"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
const account_model_1 = require("../models/account.model");
const accountNumber_1 = require("../utils/accountNumber");
const createAccount = async (accountData) => {
    // ✅ Check if email or phone number already exists
    const existingAccount = await account_model_1.AccountModel.findOne({
        $or: [
            { email: accountData.email },
            { phoneNumber: accountData.phoneNumber },
        ],
    });
    if (existingAccount) {
        const reason = existingAccount.email === accountData.email
            ? 'Account with this Email already exists'
            : 'Account with this Phone number already exists';
        // Throwing this will be caught in your controller and return proper 400 error
        throw new Error(reason);
    }
    // ✅ Generate unique account number
    let accountNumber = '';
    let isUnique = false;
    while (!isUnique) {
        accountNumber = (0, accountNumber_1.generateAccountNumber)();
        const existing = await account_model_1.AccountModel.findOne({ accountNumber });
        if (!existing)
            isUnique = true;
    }
    // ✅ Create and save the new account
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
