// AQUI É O RESOLVER, USADO EM PROJETOS COM GRAPHQL
// É EQUIVALENTE AO CONTROLLER EM PROJETOS COM REST
// QUANDO O CLIENTE PUXA UMA QUERY OU MUTATION, ELA PASSA AQUI
// LOGO APOS É CHAMADO O SERVICE

import { GqlAuthGuard } from '../../guards/local-auth.guard';
import {
  CreateProductInput,
  GetProductInput,
  ListProductInput,
} from './dto/product.input';
import { Product } from './product.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';

@Resolver(() => ProductService) // Decorator definindo um Resolver
export class ProductResolver {
  // injeção de dependencia Service
  constructor(private productService: ProductService) {}

  @UseGuards(GqlAuthGuard) // Isso obriga o cliente a estar autenticado
  @Query(() => Product) // Temos uma query que retorna Product (retorna esse modelo)
  async getProduct(@Args('query') query: GetProductInput): Promise<Product> {
    // recebe os dados enviados do cliente no parametro "query"
    // chamada para o service
    return this.productService.get(query);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Product]) // Uma query que retorna um array de Product
  async listProducts(
    @Args('ListProductInput') data: ListProductInput,
  ): Promise<Product[]> {
    return this.productService.list(data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Product)
  async createProduct(@Args('CreateProductInput') data: CreateProductInput) {
    return this.productService.create(data);
  }
}
