"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/account.route.ts
const express_1 = require("express");
const account_controller_1 = require("../controllers/account.controller");
const router = (0, express_1.Router)();
router.post("/", account_controller_1.createAccountHandler);
exports.default = router;
