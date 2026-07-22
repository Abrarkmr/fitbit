import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import { apiBaseUrl } from './config';
import { connectToDatabase } from './database';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend', apiBaseUrl });
});

app.use('/api', routes);

connectToDatabase()
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Backend listening on http://localhost:${port}`);
      console.log(`API base URL: ${apiBaseUrl}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed', error);
    process.exit(1);
  });
