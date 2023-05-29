import { Injectable, StreamableFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/Modules/Database/models/User.model';
import { Video } from 'src/Modules/Database/models/Video.model';
import { Comment } from 'src/Modules/Database/models/Comment.model';
import fsp from 'fs/promises';
import { Sequelize } from 'sequelize';
@Injectable()
export class VideosService {
  constructor(
    @InjectModel(Video) private readonly modelVideo: typeof Video,
    @InjectModel(Comment) private readonly modelComment: typeof Comment,
  ) {}

  async GetMyVideos(auth: User) {
    return await this.modelVideo.findAll({
      where: { user_id: auth.id },
    });
  }

  async AddMyVideo(
    auth: User,
    video: Express.Multer.File,
    description: string,
  ) {
    await fsp.writeFile(`clips/${video.originalname}`, video.buffer);
    return await this.modelVideo.create({
      link: video.originalname,
      user_id: auth.id,
      description: description,
    });
  }

  async getRandomVideos(count: number) {
    return await this.modelVideo.findAll({
      order: Sequelize.literal('rand()'),
      limit: 25 < count && count < 25 ? count : 25,
    });
  }

  async AddVideoComment(id: number, coment: string, auth: User) {
    return await this.modelComment.create({
      video_id: id,
      user_id: auth.id,
      text: coment,
    });
  }
  async GetVideoComments(id: number) {
    return await this.modelComment.findAll({
      where: { video_id: id },
      include: [{ association: 'User' }],
    });
  }
}
