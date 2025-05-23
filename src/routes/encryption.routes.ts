import { Router } from 'express';
import { encryptDataHandler } from '../controllers/encryption.controller';

const router = Router();

router.get('/:accountNumber/encrypt-data', encryptDataHandler);

export default router;
