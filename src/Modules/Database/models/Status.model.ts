import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  NonAttribute,
} from 'sequelize';
import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from './User.model';
import { Video } from './Video.model';
import { Comment } from './Comment.model';

@Table({ tableName: 'Status', timestamps: false })
export default class Status extends Model<
  InferAttributes<Status>,
  InferCreationAttributes<Status>
> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: CreationOptional<number>;
  @Column(DataType.STRING(30))
  name: string;
  @Column(DataType.STRING)
  tableType: string;
  @HasMany(() => User)
  Users?: NonAttribute<User[]>;

  @HasMany(() => Video)
  Videos?: NonAttribute<Video[]>;

  @HasMany(() => Comment)
  Comments?: NonAttribute<Comment[]>;
}
