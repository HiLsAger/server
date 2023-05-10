import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  NonAttribute,
} from 'sequelize';
import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Video } from './Video.model';
import { User } from './User.model';
import Status from './Status.model';

@Table({ tableName: 'Comments', updatedAt: false, createdAt: 'date' })
export class Comment extends Model<
  InferAttributes<Comment>,
  InferCreationAttributes<Comment>
> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.TEXT)
  text: string;

  @ForeignKey(() => Video)
  @Column(DataType.INTEGER)
  video_id: number;
  @BelongsTo(() => Video)
  Video?: NonAttribute<Video>;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  user_id: number;
  User?: NonAttribute<User>;

  @ForeignKey(() => Status)
  @Column(DataType.INTEGER)
  status_id: number;
  @BelongsTo(() => Status)
  Status?: NonAttribute<Status>;

  @Column(DataType.DATE)
  date: CreationOptional<Date>;
}
