import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field((type) => String, { nullable: true })
  cpf?: string;

  @Field((type) => String, { nullable: true })
  email?: string;

  @Field((type) => String)
  password: string;
}

@InputType()
export class RegisterInput {
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  password: string;

  @Field((type) => String)
  email: string;

  @Field((type) => String, { nullable: true })
  phone?: string;

  @Field((type) => String)
  cpf: string;
}

export interface LoginUser {
  token: string;
}
