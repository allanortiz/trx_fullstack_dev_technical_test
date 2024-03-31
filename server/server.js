import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import vehicleRoutes from './routes/vehicleRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/api', vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
