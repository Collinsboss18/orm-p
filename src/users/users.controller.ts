import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UserServices } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly userService: UserServices) {}

  @Get('')
  getUsers(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get('/:id')
  getUser(): Promise<User> {
    return this.userService.getById(2);
  }
}
