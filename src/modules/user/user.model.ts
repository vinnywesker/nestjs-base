import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  phone: string;

  @Field(() => String)
  cpf: string;

  @Field(() => Date)
  createdAt: Date;

  deletedAt: Date;
}
