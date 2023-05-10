import { Module } from '@nestjs/common';
import { AuthModule } from './auth/Auth.module';
import { VideosModule } from './videos/Videos.module';

@Module({ imports: [AuthModule, VideosModule] })
export class PagesModule {}
