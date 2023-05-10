import { Module } from '@nestjs/common';
import { VideosController } from './Videos.controller';
import { VideosService } from './Videos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Video } from 'src/Modules/Database/models/Video.model';

@Module({
  imports: [SequelizeModule.forFeature([Video])],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
