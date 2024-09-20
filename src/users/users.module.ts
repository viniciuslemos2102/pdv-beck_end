import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importar o repositório do User
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Exportar o UsersService
})
export class UsersModule {}
