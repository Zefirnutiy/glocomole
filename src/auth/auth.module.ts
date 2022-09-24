import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: "lkdjfgbkdjfg",
    signOptions: {
      expiresIn: "12h"
    }
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}