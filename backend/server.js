import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import productRouters from './routes/product.js';

dotenv.config();

const port = process.env.PORT || 3005;

connectDB();

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRouters);

app.listen(port, () => {
  console.log(`Server already running on port ${port}`);
});
