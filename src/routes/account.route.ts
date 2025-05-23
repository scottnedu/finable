import { Router } from "express";
import { createAccountHandler } from "../controllers/account.controller";
//import { revealAllAccountsHandler } from "../controllers/account.controller";
//import { decryptAccountHandler } from "../controllers/account.controller";

const router = Router();

router.post("/create", createAccountHandler);
//router.get("/reveal-accounts", revealAllAccountsHandler);
//router.post("/decrypt-data", decryptAccountHandler);


export default router;
