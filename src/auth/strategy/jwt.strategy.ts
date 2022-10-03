import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

​// Будем использовать после нормальной базы

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'lkdjfgbkdjfg',
    });
  }
​
  async validate(payload: any) {
    if(payload.user)
        return { userId: payload.user.id, firstName: payload.user.firstName };
        
    return { userId: payload.organization.id, title: payload.organization.title };
  }
}