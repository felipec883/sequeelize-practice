import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

@Table
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
  user!: User;
}

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
