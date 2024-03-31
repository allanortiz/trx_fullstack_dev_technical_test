import { getDatabase, ref, set, onValue, push, get } from '../firebase.js';

export const getAllVehicles = (res) => {
  try {
    const db = getDatabase();
    const reference = ref(db, 'vehicles');

    return onValue(
      reference,
      (snapshot) => {
        const data = snapshot.val();
        const array = [];

        for (const key in data) {
          const record = data[key];

          record.id = key;

          array.push(record);
        }

        return res.json(array).status(200);
      },
      { onlyOnce: true }
    );
  } catch (error) {
    console.error(error);

    return res.json({ message: error.message }).status(error.code);
  }
};

export const addVehicle = (newVehicle) => {
  const db = getDatabase();
  const reference = ref(db, 'vehicles');
  const newKey = push(reference).key;
  const newVehiclePath = `vehicles/${newKey}`;

  return set(ref(db, newVehiclePath), newVehicle);
};

export const updateVehicleById = (id, updatedVehicle) => {
  const db = getDatabase();
  const reference = ref(db, `vehicles/${id}`);

  return set(reference, updatedVehicle);
};

export const deleteVehicleById = (id) => {
  const db = getDatabase();
  const reference = ref(db, `vehicles/${id}`);

  return set(reference, null);
};
