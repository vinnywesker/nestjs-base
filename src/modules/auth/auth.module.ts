import { AuthValidate } from './auth.validate';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
      }),
    }),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy, AuthValidate],
  exports: [AuthService],
})
export class AuthModule {}
