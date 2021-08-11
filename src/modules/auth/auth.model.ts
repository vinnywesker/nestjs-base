import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field((type) => String)
  token: string;
}
