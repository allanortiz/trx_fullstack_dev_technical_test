import express from 'express';
import { createVehicle, deleteVehicle, getVehicles, updateVehicle } from '../controllers/vehicleController.js';

const router = express.Router();

router.get('/vehicles', getVehicles);
router.post('/vehicles', createVehicle);
router.put('/vehicles/:id', updateVehicle);
router.delete('/vehicles/:id', deleteVehicle);

export default router;
