import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService, // Injete o JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === password) {
      return user; // Retorna o usuário se as credenciais forem válidas
    }
    return null; // Retorna null se não encontrar o usuário ou se a senha estiver incorreta
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id }; // Crie um payload
    return {
      access_token: this.jwtService.sign(payload), // Gere o token
    };
  }
}
