import express from 'express';
import cors from 'cors';

import contactRoutes from './routes/contactRoutes.js';

const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api', contactRoutes);

app.listen(PORT, () =>
  console.log(`Server is running on http://${HOST}:${PORT}`)
);
