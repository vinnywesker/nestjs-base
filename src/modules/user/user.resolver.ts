import { GqlAuthGuard } from '../../guards/local-auth.guard';
import { CreateUserInput, DeleteUserInput, UserInput } from './dto/user.input';
import { UserService } from './user.service';
import { User } from './user.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

@Resolver((of) => UserService)
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query((type) => User)
  async getUser(@Args('query') query: UserInput): Promise<User> {
    return this.userService.get(query);
  }

  @UseGuards(GqlAuthGuard)
  @Query((type) => [User])
  async listUsers(): Promise<User[]> {
    return this.userService.list();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((type) => User)
  async createUser(@Args('InputCreateUser') data: CreateUserInput) {
    return this.userService.create(data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((type) => User)
  async deleteUser(@Args('UserDeleteInput') data: DeleteUserInput) {
    return this.userService.delete(data);
  }
}
