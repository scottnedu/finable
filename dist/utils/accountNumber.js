"use strict";
// utils/accountNumberGenerator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccountNumber = void 0;
const generateAccountNumber = () => {
    const min = 1000000000; // lowest 10-digit number
    const max = 9999999999; // highest 10-digit number
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
};
exports.generateAccountNumber = generateAccountNumber;
