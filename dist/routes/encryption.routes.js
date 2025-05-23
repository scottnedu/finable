"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encryption_controller_1 = require("../controllers/encryption.controller");
const router = (0, express_1.Router)();
router.get('/:accountNumber/encrypt-data', encryption_controller_1.encryptDataHandler);
exports.default = router;
