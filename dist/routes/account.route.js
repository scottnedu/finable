"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_controller_1 = require("../controllers/account.controller");
const validateRequest_1 = require("../middlewares/validateRequest");
const account_validator_1 = require("../validators/account.validator");
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequest_1.validateRequest)(account_validator_1.createAccountSchema), account_controller_1.createAccountHandler);
exports.default = router;
