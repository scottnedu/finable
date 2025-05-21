// routes/account.route.ts
import { Router } from "express";
import { createAccountHandler } from "../controllers/account.controller";
import { revealAllAccountsHandler } from "../controllers/account.controller";
import { decryptAccountHandler } from "../controllers/account.controller";

const router = Router();

router.post("/", createAccountHandler);
router.get("/reveal-all", revealAllAccountsHandler);
router.post("/decrypt-data", decryptAccountHandler);


export default router;
