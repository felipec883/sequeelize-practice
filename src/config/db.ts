import { Sequelize } from "sequelize-typescript";
import { DATABASE, DB_PASSWORD, DB_PORT } from "./constants.js";
import { Task } from "../models/task.js";
import { User } from "../models/user.js";
export const sequelize = new Sequelize({
  dialect: "postgres",
  database: DATABASE,
  username: "postgres",
  password: DB_PASSWORD,
  port: +DB_PORT,
  logging: (...msg: any) => console.log(msg),
  models: [Task, User],
  define: {
    freezeTableName: true,
  },
});

// sequelize.sync();
