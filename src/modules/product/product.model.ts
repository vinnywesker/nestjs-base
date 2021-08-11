// Esse é o modelo de produtos, já integrando com o Modelo do graphql
// No processo de build o typeGraphql gera o schema apartir disso
// Esse modelo é equivalente a tabela do banco de dados

import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType() // Modelo do graphql, que retorna as informações
export class Product {
  @Field(() => Int) // Adicionando isso, fica possivel solicitar esse parametro no graphql
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  label: string;

  @Field(() => String)
  brand: string;

  @Field(() => Date)
  createdAt: Date;

  deletedAt: Date; // Parametro sem o decorator, fica no modelo porém o cliente não consegue solicitar no graphql.
}
