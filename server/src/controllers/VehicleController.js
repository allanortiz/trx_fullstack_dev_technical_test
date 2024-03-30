const { db, ref, set, onValue, push } = require("../../firebase");

exports.VehicleController = {
  getVehicles: (req, res) => {
    const vehiclesRef = ref(db, "vehicles", { onlyOnce: true });

    return onValue(vehiclesRef, (snapshot) => {
      const data = snapshot.val();
      const array = [];

      for (const key in data) {
        array.push(data[key]);
      }

      return res.json(array).status(200);
    });

    // onValue(vehiclesRef, (snapshot) => {
    //   const data = snapshot.val();

    //   const array = [];

    //   // snapshot.forEach((childSnapshot) => {
    //   //   array.push(childSnapshot.val());
    //   // });

    //   console.log(snapshot);
    //   console.log(data);

    //   // return res.json(array).status(200);

    //   return res.json(data).status(200);
    //   // updateStarCount(postElement, data);
    // });
  },

  createVehicle: (req, res) => {
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
    } = req.body || {};

    push(ref(db, "vehicles"), {
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
    })
      .then(() => {
        return res
          .json({ message: "El vehículo fue creado exitosamente" })
          .status(200);
      })
      .catch((error) => {
        return res.json({ message: error.message }).status(error.code);
      });
  },

  updateVehicle: (req, res) => {
    return res.send(req.params.id).status(200);
  },

  deleteVehicle: (req, res) => {
    return res.send(req.params.id).status(200);
  },
};
