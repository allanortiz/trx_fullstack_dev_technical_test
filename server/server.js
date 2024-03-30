const express = require("express");
const app = express();
const cors = require("cors");
const { db } = require("./firebase");
const { VehicleController } = require("./src/controllers/VehicleController");

const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/api/vehicles", VehicleController.getVehicles);
app.post("/api/vehicles", VehicleController.createVehicle);
// app.put("/api/vehicles/:id", VehicleController.updateVehicle);
// app.delete("/api/vehicles/:id", VehicleController.deleteVehicle);

// app.get("/api/vehicles", (req, res) => {
//   res.json({ message: "Vehicle List" });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
