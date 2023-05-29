import { InjectModel } from '@nestjs/sequelize';
import { LoginInput, RegisterInput } from './Auth.input';
import md5 from 'md5';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/Modules/Database/models/User.model';
import makeRandom from 'src/utils/makeRandom';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private readonly modelUser: typeof User) {}
  async register(body: RegisterInput) {
    const data = await this.modelUser.create(body);
    data.authKey = makeRandom(32);
    await data.save();
    return data.authKey;
  }
  async login(body: LoginInput) {
    const data = await this.modelUser.findOne({
      where: { username: body.username, password: md5(body.password) },
    });
    if (!data) {
      throw new UnauthorizedException(
        'Поля с таким логином и паролем не найдено',
      );
    }
    data.authKey = makeRandom(32);
    await data.save();
    return data.authKey;
  }
}

