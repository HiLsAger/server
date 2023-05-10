import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { Observable } from 'rxjs';
import { AuthService } from '../Auth/Auth.service';
import { User } from '../Database/models/User.model';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly auth: AuthService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<FastifyRequest & { user: User }>();
    const { authkey } = request.headers;
    if (!authkey) throw new UnauthorizedException();
    const data = await this.auth.check(authkey as string);
    if (!data) throw new UnauthorizedException();
    request.user = data;
    return true;
  }
}
export const Auth = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
