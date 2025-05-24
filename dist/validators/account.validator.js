"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createAccountSchema = joi_1.default.object({
    firstName: joi_1.default.string().trim().required().messages({
        'string.empty': 'First name is required',
    }),
    surname: joi_1.default.string().trim().required().messages({
        'string.empty': 'Surname is required',
    }),
    email: joi_1.default.string().email().required().messages({
        'string.email': 'Enter a valid email',
        'string.empty': 'Email is required',
    }),
    phoneNumber: joi_1.default.string().required().messages({
        'string.empty': 'Phone number is required',
    }),
    dateOfBirth: joi_1.default.string().required().messages({
        'string.empty': 'Date of birth is required',
    }),
});
