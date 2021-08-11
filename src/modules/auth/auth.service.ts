import { JwtService } from '@nestjs/jwt';
import { LoginInput, RegisterInput, LoginUser } from './dto/auth.input';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async register(data: RegisterInput) {
    const password = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({ data: { ...data, password } });
  }

  async login(data: LoginInput): Promise<LoginUser | any> {
    try {
      const user = data.email
        ? await this.prisma.user.findUnique({
            where: { email: data.email },
          })
        : await this.prisma.user.findUnique({
            where: { email: data.cpf },
          });
      const mash = await bcrypt.compare(data.password, user.password);

      if (!mash) {
        throw new HttpException('PASSWORD INCORRECT', HttpStatus.UNAUTHORIZED);
      }

      return {
        token: this.jwtService.sign({ email: user.email, id: user.id }),
      };
    } catch (err) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
  }
}
