import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Auther } from './auther.model';
import { AutherService } from './auther.service';
import { AutherInput } from './auther.input';

@Resolver(() => Auther)
export class AutherResolver {
  constructor(private readonly authService: AutherService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => Auther)
  async login(@Args('email') email: string): Promise<Auther> {
    return this.authService.findByEmail(email);
  }

  @Mutation(() => Auther)
  async register(@Args('input') input: AutherInput): Promise<Auther> {
    return this.authService.create(input);
  }
}
