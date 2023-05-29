import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

export class VideoInput {
  @ApiProperty({ description: 'Описание' })
  @IsString()
  desc: string;
}
export class CommentInput {
  @ApiProperty({ description: 'ID видео' })
  @IsNumber()
  id: number;
  @ApiProperty({ description: 'Комментарий' })
  @IsString()
  comment: string;
}
