// src/auth/jwt.strategy.ts
import { ConfigService } from '@nestjs/config';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../users/user.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor( private userService: UserService,private readonly configService: ConfigService,) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:configService.get<string>('JWT_SECRET'),
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
