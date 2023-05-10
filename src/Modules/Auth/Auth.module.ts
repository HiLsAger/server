import { Global, Module } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../Database/models/User.model';
@Global()
@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
