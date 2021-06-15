import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  getUsers(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get('/users/:id')
  getUser(): Promise<User> {
    return this.userService.getById(2);
  }
}
