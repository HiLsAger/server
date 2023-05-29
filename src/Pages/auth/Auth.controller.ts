import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LoginInput, RegisterInput } from './Auth.input';
import { User } from 'src/Modules/Database/models/User.model';
import { Auth, AuthGuard } from 'src/Modules/Guards/AuthGuard';
import { ApiHeader } from '@nestjs/swagger';
import { AuthService } from './Auth.service';

@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}
  @Post('login')
  login(@Body() body: LoginInput) {
    return this.service.login(body);
  }
  @Post('register')
  register(@Body() body: RegisterInput) {
    return this.service.register(body);
  }
  @ApiHeader({ name: 'authKey' })
  @UseGuards(AuthGuard)
  @Get('profile')
  async profile(@Auth() auth: User) {
    return {
      id: auth.id as number,
      username: auth.username,
      avatar: auth.avatar,
      status_id: auth.status_id as number,
      status: auth.Status?.name,
      name: auth.name,
    };
  }
}
