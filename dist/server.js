"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_config_1 = require("./config/db.config");
//const PORT = process.env.PORT || 3000;
const PORT = parseInt(process.env.PORT || "3000", 10);
const startServer = async () => {
    await (0, db_config_1.connectDB)();
    app_1.default.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is running on port ${PORT}`);
    });
};
startServer();
