// routes/account.route.ts
import { Router } from "express";
import { createAccountHandler } from "../controllers/account.controller";

const router = Router();

router.post("/", createAccountHandler);

export default router;
