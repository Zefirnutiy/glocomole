import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { OrganizationModule } from 'src/public/organization/organization.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';


@Global()
@Module({
  imports: [JwtModule.register({
    secret: "lkdjfgbkdjfg",
    signOptions: {
      expiresIn: "12h"
    }
  }), OrganizationModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
