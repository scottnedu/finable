"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountHandler = void 0;
const account_service_1 = require("../services/account.service");
const createAccountHandler = async (req, res, next) => {
    try {
        const newAccount = await (0, account_service_1.createAccount)(req.body);
        res.status(201).json({
            status: "success",
            message: "Your account has been created successfully",
            data: newAccount,
        });
    }
    catch (err) {
        if (err instanceof Error) {
            err.message = `Failed to create account: ${err.message}`;
            next(err);
        }
        else {
            next(new Error("An unknown error occurred"));
        }
    }
};
exports.createAccountHandler = createAccountHandler;
