import { Controller, Get, UseGuards } from '@nestjs/common';
import { VideosService } from './Videos.service';
import { Auth, AuthGuard } from 'src/Modules/Guards/AuthGuard';
import { User } from 'src/Modules/Database/models/User.model';
import { ApiHeader } from '@nestjs/swagger';

@Controller('videos')
export class VideosController {
  constructor(private readonly service: VideosService) {}

  @ApiHeader({ name: 'authKey' })
  @UseGuards(AuthGuard)
  @Get('my')
  GetMyVideos(@Auth() auth: User) {
    return this.service.GetMyVideos(auth);
  }

  @Get('all')
  GetVideos() {
    return this.service.GetVideos();
  }
}
