"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (schema) => {
    return (req, res, next) => {
        console.log("🚀 Validating input on route:", req.path);
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const messages = error.details.map(err => err.message);
            res.status(400).json({
                status: "error",
                message: messages,
            });
        }
        else {
            next();
        }
    };
};
exports.validateRequest = validateRequest;
