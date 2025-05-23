"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const account_route_1 = __importDefault(require("./routes/account.route"));
const errorHandler_1 = require("./middlewares/errorHandler");
const virtualCard_route_1 = __importDefault(require("./routes/virtualCard.route"));
const encryption_routes_1 = __importDefault(require("./routes/encryption.routes"));
const ledger_route_1 = __importDefault(require("./routes/ledger.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use(errorHandler_1.errorHandler);
app.use("/api/account", account_route_1.default);
app.use('/api/account', virtualCard_route_1.default);
app.use('/api/account', encryption_routes_1.default);
app.use('/api/account', ledger_route_1.default);
// Base route
app.get("/", (_req, res) => {
    res.send("Finable API is running...");
});
exports.default = app;
