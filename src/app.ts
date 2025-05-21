import express, { Application } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import accountRoutes from "./routes/account.route";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(errorHandler);
app.use("/api/accounts", accountRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/accounts", accountRoutes);



// Base route
app.get("/", (_req, res) => {
  res.send("Finable API is running...");
});

export default app;
