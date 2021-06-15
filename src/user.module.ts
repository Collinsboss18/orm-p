import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Pet } from './pet.entity';

@Module({
  imports: [User, Pet],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
