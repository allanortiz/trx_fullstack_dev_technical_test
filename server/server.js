const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;

app.use(cors());

app.get("/api/vehicles", (req, res) => {
  res.json({ message: "Vehicle List" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
