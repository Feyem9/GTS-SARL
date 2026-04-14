import { Router, Request, Response } from 'express';
import { PayUnitService } from '../payunit.service';

const router = Router();
const payunitService = new PayUnitService();

// POST /api/payment/initiate
// Appelé par tes apps pour démarrer un paiement
router.post('/initiate', async (req: Request, res: Response) => {
  try {
    const result = await payunitService.initiatePayment(req.body);
    res.json({ success: true, data: result });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Payment initiation failed';
    res.status(500).json({ success: false, error: msg });
  }
});

// POST /api/payment/callback
// Appelé par PayUnit après le paiement (webhook)
router.post('/callback', async (req: Request, res: Response) => {
  try {
    const { transaction_id, status, amount } = req.body;
    console.log(`[PayUnit Callback] txn=${transaction_id} status=${status} amount=${amount}`);
    // Ici tu peux notifier ton app via webhook ou mettre à jour Firestore
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// GET /api/payment/verify/:transactionId
// Vérifie le statut d'un paiement
router.get('/verify/:transactionId', async (req: Request, res: Response) => {
  try {
    const data = await payunitService.verifyPayment(req.params['transactionId']);
    res.json({ success: true, data });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Verification failed';
    res.status(500).json({ success: false, error: msg });
  }
});

export default router;
