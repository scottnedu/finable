"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
};
exports.errorHandler = errorHandler;
