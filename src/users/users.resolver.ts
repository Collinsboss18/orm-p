import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserObj } from './dto/user.dto';
import { UserServices } from './users.service';

@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UserServices) {}

  @Query(returns  => [UserObj])
  async users(): Promise<UserObj[]> {
    return this.userService.getAll();
  }

  @Mutation(returns => UserObj)
  async createUser(@Args('name') name: string): Promise<UserObj> {
    return this.userService.createUser(name);
  }

  @Mutation(returns => UserObj)
  async updateUser(
    @Args('id') id: number,
    @Args('name') input: string,
  ) {
    return this.userService.updateUser(id, input);
  }

  @Mutation(returns  => UserObj)
  async deleteUser(@Args('id') id: number) {
    return this.userService.deleteUser(id);
  }

  @Query(returns => String)
  async hello() {
    return "Welcome to user services";
  }
}
