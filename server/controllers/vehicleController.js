import { addVehicle, deleteVehicleById, getAllVehicles, updateVehicleById } from '../models/vehicleModel.js';

export const getVehicles = async (req, res) => {
  const { page, size, filter } = req.query;

  return getAllVehicles(res, { page, size, filter });
};

export const createVehicle = (req, res) => {
  const {
    license_plate,
    economic_number,
    vim,
    seats,
    insurance,
    insurance_number,
    brand,
    model,
    year,
    color,
    route_start_lat,
    route_start_lng,
    route_end_lat,
    route_end_lng,
  } = req.body || {};
  const newRecord = {
    license_plate,
    economic_number,
    vim,
    seats,
    insurance,
    insurance_number,
    brand,
    model,
    year,
    color,
    route_start_lat,
    route_start_lng,
    route_end_lat,
    route_end_lng,
  };

  addVehicle(newRecord)
    .then(() => {
      res.status(200).send({ message: 'Vehículo creado exitosamente' });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

export const updateVehicle = (req, res) => {
  const { id } = req.params;
  const {
    license_plate,
    economic_number,
    vim,
    seats,
    insurance,
    insurance_number,
    brand,
    model,
    year,
    color,
    route_start_lat,
    route_start_lng,
    route_end_lat,
    route_end_lng,
  } = req.body || {};
  const updatedData = {
    license_plate,
    economic_number,
    vim,
    seats,
    insurance,
    insurance_number,
    brand,
    model,
    year,
    color,
    route_start_lat,
    route_start_lng,
    route_end_lat,
    route_end_lng,
  };

  updateVehicleById(id, updatedData)
    .then(() => {
      res.status(200).send({ message: 'Vehículo actualizado exitosamente', data: { ...updatedData, id } });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

export const deleteVehicle = (req, res) => {
  const { id } = req.params;

  deleteVehicleById(id)
    .then(() => {
      res.status(200).send({ message: 'Vehículo eliminado exitosamente' });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};
