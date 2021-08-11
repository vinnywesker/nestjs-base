import { User } from './user.model';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserInput, DeleteUserInput, UserInput } from './dto/user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async get(where: UserInput): Promise<User> {
    return this.prisma.user.findUnique({ where });
  }

  async list(): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        deletedAt: null,
      },
    });
  }

  async create(data: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async delete(where: DeleteUserInput): Promise<User> {
    return this.prisma.user.update({
      where,
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
