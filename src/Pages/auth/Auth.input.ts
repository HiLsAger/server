import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginInput {
  @ApiProperty({ description: 'Логин' })
  @IsString()
  @IsNotEmpty()
  username: string;
  @ApiProperty({ description: 'Пароль' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
export class RegisterInput {
  @ApiProperty({ description: 'Логин' })
  @IsString()
  @IsNotEmpty()
  username: string;
  @ApiProperty({ description: 'Пароль' })
  @IsString()
  @IsNotEmpty()
  password: string;
  @ApiProperty({ description: 'Почта' })
  @IsString()
  @IsNotEmpty()
  email: string;
  @ApiProperty({ description: 'Имя' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
