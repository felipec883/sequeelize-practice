import express from "express";
import "dotenv/config";
import { sequelize } from "./config/db.js";
import userRoute from "./routes/user.routes.js";
const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRoute);
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
