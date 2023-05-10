import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { models } from './models';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      database: 'open_imagination',
      host: 'localhost',
      models,
      username: 'root',
    }),
  ],
})
export class DatabaseModule {}
