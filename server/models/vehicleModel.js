import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  get,
  query,
  startAt,
  endAt,
  orderByChild,
  orderByValue,
  equalTo,
  limitToFirst,
} from '../firebase.js';

export const getAllVehicles = (res, { page, size, filter = '' }) => {
  try {
    const db = getDatabase();
    const reference = ref(db, 'vehicles/');
    const queryRef = query(reference, orderByChild('index'));
    // const queryRef = query(reference, orderByChild('index'), limitToFirst(size), startAt(startIdx));
    // const queryRef = filter ? query(reference, orderByChild('index'), limitToFirst(size)) : reference;

    const startIdx = (page - 1) * size;

    return onValue(
      queryRef,
      (snapshot) => {
        const data = snapshot.val();
        const array = [];

        for (const key in data) {
          const index = data[key]?.index?.toLowerCase();

          if (!index?.includes?.(filter?.toLowerCase())) {
            continue;
          }

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
  const index = [...Object.values(newVehicle)].join('').toLowerCase();
  const newVehicleWithIndex = { ...newVehicle, index };

  return set(ref(db, newVehiclePath), newVehicleWithIndex);
};

export const updateVehicleById = (id, updatedVehicle) => {
  const db = getDatabase();
  const reference = ref(db, `vehicles/${id}`);
  const index = [...Object.values(updatedVehicle)].join('').toLowerCase();
  const updatedVehicleWithIndex = { ...updatedVehicle, index };

  return set(reference, updatedVehicleWithIndex);
};

export const deleteVehicleById = (id) => {
  const db = getDatabase();
  const reference = ref(db, `vehicles/${id}`);

  return set(reference, null);
};
