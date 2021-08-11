import { Product } from './product.model';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import {
  CreateProductInput,
  GetProductInput,
  ListProductInput,
} from './dto/product.input';

@Injectable() // Esse service pode ser pode ser injetado em outras dependências
export class ProductService {
  constructor(private prisma: PrismaService) {} //Instancia do prisma

  // Abaixo teremos os metodos do prisma

  async get(where: GetProductInput): Promise<Product> {
    return this.prisma.product.findUnique({
      // Busca um único item
      where,
    });
  }

  async list(data: ListProductInput): Promise<Product[]> {
    return this.prisma.product.findMany({
      // Busca vários itens
      // Repare que podemos usar a lógica AND, OR OU NOT
      // que facilita muito na hora de buscar algum dado
      // essa é a grande vantagem do prisma, isso ajuda muito mais na frente
      // e reduz muito o código
      where: {
        OR: [
          {
            name: {
              contains: data.name,
            },
          },
          {
            label: {
              contains: data.label,
            },
          },
          {
            brand: {
              contains: data.brand,
            },
          },
        ],
      },
    });
  }

  async create(data: CreateProductInput): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }
}
