import express from "express";
import "dotenv/config";
import { sequelize } from "./config/db.js";
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//a
app.listen(PORT, async () => {
  try {
    console.log("CONNECTED TO THE WORLD");
    await sequelize.authenticate();

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
