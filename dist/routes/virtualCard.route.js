"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const virtualCard_controller_1 = require("../controllers/virtualCard.controller");
const router = (0, express_1.Router)();
router.post('/:accountNumber/virtual-card', virtualCard_controller_1.attachVirtualCardController);
exports.default = router;
