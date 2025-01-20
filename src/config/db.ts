import { Sequelize } from "sequelize";
import { DATABASE, DB_PASSWORD, DB_PORT } from "./constants.js";

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: DATABASE,
  username: "postgres",
  password: DB_PASSWORD,
  port: +DB_PORT,
  logging: (...msg: any) => console.log(msg),
});
