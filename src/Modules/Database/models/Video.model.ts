import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  NonAttribute,
} from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import Status from './Status.model';
import { User } from './User.model';

@Table({ tableName: 'Videos', updatedAt: false, createdAt: 'date' })
export class Video extends Model<
  InferAttributes<Video>,
  InferCreationAttributes<Video>
> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: CreationOptional<number>;

  @AllowNull(false)
  @Column(DataType.STRING)
  link: string;

  @Column(DataType.STRING)
  description: string | null;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: number;
  @BelongsTo(() => User)
  User?: NonAttribute<User>;

  @Default(7)
  @ForeignKey(() => Status)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  status_id: CreationOptional<number>;
  @BelongsTo(() => Status)
  Status?: NonAttribute<Status>;

  @Column(DataType.DATE)
  date: CreationOptional<Date>;
}
