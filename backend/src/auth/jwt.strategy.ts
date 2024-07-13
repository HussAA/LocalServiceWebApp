// src/auth/jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { UserService } from '../users/user.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService,) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        '23c650bb15ce027909af55ba160270fc5b0f8ffe97f58dd5352fdf8f369a',
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findById(payload.sub); // Ensure this method exists in your UserService
    if (!user) {
      throw new UnauthorizedException();
    }
    return user; // Return the full user entity
  }
}
