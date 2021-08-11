// AQUI FICA TODOS OS INPUT PARA AS QUERY'S E MUTATIONS GRAPHQL
// No processo de build o typeGraphql gera o schema apartir disso

import { InputType, Field, Int } from '@nestjs/graphql';

@InputType() // Marcação do tipo input
export class CreateProductInput {
  @Field(() => String) // Parâmetro name vai receber uma informação tipo string, (pode ser String, Int, Date, Float)
  name: string; // Parâmetro

  @Field(() => String)
  label: string;

  @Field(() => String)
  brand: string;
}

@InputType()
export class ProductInput {
  @Field(() => String)
  name: string;
}

@InputType()
export class GetProductInput {
  @Field(() => Int)
  id: number;
}

@InputType()
export class ListProductInput {
  @Field(() => String, { nullable: true }) // nullable: true tira a obrigatoriedade de especificar esse parâmetro na query
  name: string;

  @Field(() => String, { nullable: true })
  label: string;

  @Field(() => String, { nullable: true })
  brand: string;
}
