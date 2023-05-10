import md5 from 'md5';
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
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import Status from './Status.model';
import { Video } from './Video.model';
import { Comment } from './Comment.model';
@Table({ tableName: 'users', createdAt: 'date', updatedAt: false })
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: CreationOptional<number>;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(60))
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  get password(): string {
    return this.getDataValue('password');
  }
  set password(value: string) {
    this.setDataValue('password', md5(value));
  }

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  avatar: string | null;

  @Default(1)
  @AllowNull(false)
  @ForeignKey(() => Status)
  @Column(DataType.INTEGER)
  status_id: CreationOptional<number>;

  @BelongsTo(() => Status)
  Status?: NonAttribute<Status>;

  @Column(DataType.DATE)
  date: CreationOptional<Date>;
  @Unique
  @Column(DataType.STRING)
  authKey: string | null;

  @Unique
  @Column(DataType.STRING)
  accessToken: string | null;

  @HasMany(() => Video)
  Videos?: NonAttribute<Video[]>;

  @HasMany(() => Comment)
  Comments?: NonAttribute<Comment[]>;
}
