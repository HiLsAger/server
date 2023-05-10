import { Injectable } from '@nestjs/common';
import { User } from '../Database/models/User.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private readonly modelUser: typeof User) {}

  async check(token: string) {
    const data = await this.modelUser.findOne({
      where: { authKey: token },
      include: ['Status'],
    });
    return data;
  }
}
