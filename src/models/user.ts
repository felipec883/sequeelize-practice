import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  HasMany,
} from "sequelize-typescript";
import { Task } from "./task.js";

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.NUMBER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.STRING)
  role!: string;

  @HasMany(() => Task)
  tasks!: Task[];
}
