import { Router } from "express";
import { createAccountHandler } from "../controllers/account.controller";

const router = Router();

router.post("/create", createAccountHandler);


export default router;
