import { Router } from 'express';
import * as ledgerController from '../controllers/ledger.controller';

const router = Router();

router.get('/ledger', ledgerController.getAllAccounts);
router.post('/decrypt', ledgerController.decryptEncryptedData);

export default router;
