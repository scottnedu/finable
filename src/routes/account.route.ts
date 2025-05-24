import { Router } from "express";
import { createAccountHandler } from "../controllers/account.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createAccountSchema } from "../validators/account.validator";

const router = Router();

router.post("/create", validateRequest(createAccountSchema), createAccountHandler);

export default router;
