import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Render,
  Res,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { VideosService } from './Videos.service';
import { Auth, AuthGuard } from 'src/Modules/Guards/AuthGuard';
import { User } from 'src/Modules/Database/models/User.model';
import { ApiHeader } from '@nestjs/swagger';
import * as fs from 'fs';

import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { CommentInput, VideoInput } from './Videos.input';
import { extname } from 'path';
import { FastifyFileInterceptor } from 'nest-fastify-multer';

@Controller('videos')
export class VideosController {
  constructor(private readonly service: VideosService) {}

  @ApiHeader({ name: 'authKey' })
  @UseGuards(AuthGuard)
  @Get('my')
  GetMyVideos(@Auth() auth: User) {
    return this.service.GetMyVideos(auth);
  }

  @Get('random/:count')
  GetVideosRandom(@Param('count', ParseIntPipe) count: number) {
    return this.service.getRandomVideos(count);
  }

  @Get('all')
  GetVideos() {
    return this.service.GetVideos();
  }
  @Get('view/')
  @Get('fc')
  GetVideo() {
    return this.service.GetVideo();
  }
  @ApiHeader({ name: 'authKey' })
  @Post('comment')
  @UseGuards(AuthGuard)
  async addComment(@Body() body: CommentInput, @Auth() auth: User) {
    return this.service.AddVideoComment(body.id, body.comment, auth);
  }
  @Get('comment/:id')
  async getComment(@Param('id', ParseIntPipe) id: number) {
    return this.service.GetVideoComments(id);
  }

  @ApiHeader({ name: 'authKey' })
  @Post('add')
  @FastifyFileInterceptor('video', {})
  @UseGuards(AuthGuard)
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: VideoInput,
    @Auth() auth: User,
  ) {
    return this.service.AddMyVideo(auth, file, body.desc);
  }
}
