"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachVirtualCardController = void 0;
const virtualCard_service_1 = require("../services/virtualCard.service");
const attachVirtualCardController = async (req, res, next) => {
    try {
        const { accountNumber } = req.params;
        const updatedAccount = await (0, virtualCard_service_1.attachVirtualCard)(accountNumber);
        res.status(200).json({
            status: 'success',
            data: updatedAccount,
        });
    }
    catch (err) {
        if (err instanceof Error)
            next(err);
        else
            next(new Error('Unknown error occurred'));
    }
};
exports.attachVirtualCardController = attachVirtualCardController;
