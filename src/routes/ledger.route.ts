// routes/ledger.route.ts
import { Router } from 'express';
import * as ledgerController from '../controllers/ledger.controller';



const router = Router();

router.get('/ledger', ledgerController.getAllAccounts); // List all accounts
router.post('/decrypt', ledgerController.decryptEncryptedData); // Decrypt encrypted data

export default router;
