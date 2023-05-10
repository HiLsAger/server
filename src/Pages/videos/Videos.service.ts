import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/Modules/Database/models/User.model';
import { Video } from 'src/Modules/Database/models/Video.model';

@Injectable()
export class VideosService {
  constructor(@InjectModel(Video) private readonly modelVideo: typeof Video) {}

  async GetMyVideos(auth: User) {
    return await this.modelVideo.findAll({
      where: { user_id: auth.id },
    });
  }
  async GetVideos() {
    return await this.modelVideo.findAll();
  }
}
