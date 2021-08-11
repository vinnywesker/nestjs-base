import { User } from './../user/user.model';
import { LoginInput, RegisterInput } from './dto/auth.input';
import { Auth } from './auth.model';
import { AuthService } from './auth.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver((of) => AuthService)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation((type) => Auth)
  async login(@Args('LoginInput') data: LoginInput) {
    return this.authService.login(data);
  }

  @Mutation((type) => User)
  async register(@Args('RegisterInput') data: RegisterInput) {
    return this.authService.register(data);
  }
}
