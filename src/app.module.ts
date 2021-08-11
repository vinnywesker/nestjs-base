// modulo principal
// aqui ficam as dependencias que podem ser acessadas em qualquer modulo

import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ProductNodule } from './modules/product/product.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    ProductNodule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schema.gql'), // local onde vai ser gerado o schema do graphql
    }),
  ],
})
export class AppModule {}
