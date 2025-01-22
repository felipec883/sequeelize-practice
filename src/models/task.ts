import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user.js";
import { Col } from "sequelize/lib/utils";

@Table({ tableName: "task", freezeTableName: true })
export class Task extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  created_by!: number;

  @BelongsTo(() => User)
  user!: User | null;
}
