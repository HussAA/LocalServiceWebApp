// src/auth/jwt.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '23c650bb15ce027909af55ba160270fc5b0f8ffe97f58dd5352fdf8f369a2',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
