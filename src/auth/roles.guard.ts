import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true; // Se não houver papéis definidos, permite acesso
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user && roles.includes(user.role);
  }
}
