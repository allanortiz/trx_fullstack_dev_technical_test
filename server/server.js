import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import vehicleRoutes from './routes/vehicleRoutes.js';

const app = express();

const PORT = 8080;

// const WHITE_LIST = ["http://localhost:3000"];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (WHITE_LIST.indexOf(origin) !== -1) {
//       callback(null, true);
//       return;
//     }

//     callback(new Error("Not allowed by CORS"));
//   },
// };

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/api', vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
