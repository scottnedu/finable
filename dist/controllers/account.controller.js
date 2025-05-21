"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountHandler = void 0;
const account_service_1 = require("../services/account.service");
const createAccountHandler = async (req, res, next) => {
    try {
        const newAccount = await (0, account_service_1.createAccount)(req.body);
        res.status(201).json({
            status: "Your account has been created successfully Obade",
            data: newAccount,
        });
    }
    catch (err) {
        next(err); // let the global error-handler decide
    }
};
exports.createAccountHandler = createAccountHandler;
