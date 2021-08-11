import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

// ESSE É O MODULO DO PRODUTO
// AQUI VC PODE PROVER TODAS AS DEPENDENCIAS DO MODULO
// ELAS FICAM DISPONIVEIS A NIVEL DESTE MODULO APENAS
// NO CASO ESTOU PROVENDO ProductService e ProductResolver

// posso exportar as dependencias que futuramente posso estar usando em outros modulos (fora do product.module)
// porem não pode esquecer de definir no modulo principal (app.module.ts)

@Module({
  providers: [ProductService, ProductResolver],
  exports: [ProductService],
})
export class ProductNodule {}
