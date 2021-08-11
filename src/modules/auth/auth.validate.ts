import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthValidate {
  constructor(private readonly prisma: PrismaService) {}

  async validate({ email }) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw Error('Authenticate validation error');
    }
    return user;
  }
}
