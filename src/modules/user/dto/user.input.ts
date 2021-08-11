import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  email: string;

  @Field((type) => String, { nullable: true })
  phone: string;

  @Field((type) => String)
  cpf: string;

  @Field((type) => String)
  password: string;
}

@InputType()
export class DeleteUserInput {
  @Field((type) => Int, { nullable: true })
  id?: number;

  @Field((type) => String, { nullable: true })
  cpf?: string;
}

@InputType()
export class UserInput {
  @Field((type) => Int, { nullable: true })
  id?: number;

  @Field((type) => String, { nullable: true })
  cpf?: string;
}
