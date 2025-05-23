import dotenv from "dotenv";
import express, { Application } from "express";
import morgan from "morgan";
import accountRoutes from "./routes/account.route";
import { errorHandler } from "./middlewares/errorHandler";
import virtualCardRoutes from "./routes/virtualCard.route";
import encryptionRoutes from './routes/encryption.routes';
import ledgerRoutes from './routes/ledger.route';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(errorHandler);
app.use("/api/account", accountRoutes);
app.use('/api/account', virtualCardRoutes);
app.use('/api/account', encryptionRoutes);
app.use('/api/account', ledgerRoutes);



// Base route
app.get("/", (_req, res) => {
  res.send("Finable API is running...");
});

export default app;
