import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { apiKeyMiddleware } from './middleware/auth.middleware';
import paymentRoutes from './routes/payment.routes';

dotenv.config();

const app = express();
const PORT = process.env['PORT'] || 3000;

app.use(cors());
app.use(express.json());

// Health check (pas de auth requise)
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'payunit-microservice' });
});

// Routes paiement (protégées par clé API)
app.use('/api/payment', apiKeyMiddleware, paymentRoutes);

app.listen(PORT, () => {
  console.log(`PayUnit microservice running on port ${PORT}`);
});
