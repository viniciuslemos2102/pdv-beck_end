import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async createUser(@Body() body) {
    const { username, password, role } = body;
    return this.usersService.createUser(username, password, role);
  }
}
