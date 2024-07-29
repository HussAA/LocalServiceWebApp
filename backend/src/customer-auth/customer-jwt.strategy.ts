// src/auth/jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CustomerService } from 'src/customerUsers/customer.service';
@Injectable()
export class CustomerJwtStrategy extends PassportStrategy(Strategy) {
  constructor(private customerService: CustomerService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        '23c650bb15ce027909af55ba160270fc5b0f8ffe97f58dd5352fdf8f369b',
    });
  }

  async validate(payload: any) {
    const user = await this.customerService.findById(payload.sub); // Ensure this method exists in your UserService
    if (!user) {
      throw new UnauthorizedException();
    }
    return user; // Return the full user entity
  }
}
