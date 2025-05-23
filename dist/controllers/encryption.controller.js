"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptDataHandler = void 0;
const encryption_service_1 = require("../services/encryption.service");
const encryptDataHandler = async (req, res, next) => {
    try {
        const { accountNumber } = req.params;
        const result = await (0, encryption_service_1.encryptSensitiveData)(accountNumber);
        res.status(200).json({
            status: 'success',
            message: 'Iyanda, for testing purpose, I have returned both your encrypted and decrypted data',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.encryptDataHandler = encryptDataHandler;
