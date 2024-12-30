require("dotenv").config(); // Carga las variables del archivo .env al entorno
const express = require("express");
const app = express();

const port = process.env.SERVER_PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Environment Variables Test",
    SERVER_PORT: process.env.SERVER_PORT,
    DB_HOST: process.env.DB_HOST,
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
