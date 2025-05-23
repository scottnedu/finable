import { Router } from 'express';
import { attachVirtualCardController } from '../controllers/virtualCard.controller';

const router = Router();

router.post('/:accountNumber/virtual-card', attachVirtualCardController);

export default router;
