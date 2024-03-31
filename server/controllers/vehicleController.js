import { addVehicle, deleteVehicleById, getAllVehicles, updateVehicleById } from '../models/vehicleModel.js';
import { getDatabase, ref, set, onValue, push, get } from '../firebase.js';

export const getVehicles = async (req, res) => {
  return getAllVehicles(res);
};

// export const createVehicle = (req, res) => {
//   const { license_plate, economic_number, vim, seats, insurance, insurance_number, brand, model, year, color } =
//     req.body || {};
//   const newRecord = {
//     license_plate,
//     economic_number,
//     vim,
//     seats,
//     insurance,
//     insurance_number,
//     brand,
//     model,
//     year,
//     color,
//   };

//   const db = getDatabase();
//   const reference = ref(db, 'vehicles');
//   const newKey = push(reference).key;
//   const newRecordPath = `vehicles/${newKey}`;

//   console.log(newRecordPath);

//   set(ref(db, newRecordPath), newRecord)
//     .then(() => {
//       res.status(200).send({ message: 'Vehículo creado exitosamente' });
//     })
//     .catch((error) => {
//       res.status(500).send({ error: error.message });
//     });
// };

export const createVehicle = (req, res) => {
  const { license_plate, economic_number, vim, seats, insurance, insurance_number, brand, model, year, color } =
    req.body || {};
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
  const { license_plate, economic_number, vim, seats, insurance, insurance_number, brand, model, year, color } =
    req.body || {};
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
