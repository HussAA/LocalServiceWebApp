// src/auth/jwt.strategy.ts
import { ConfigService } from '@nestjs/config';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CustomerService } from 'src/customerUsers/customer.service';
@Injectable()
export class CustomerJwtStrategy extends PassportStrategy(Strategy) {
  constructor(private customerService: CustomerService,private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('CUSTOMER_JWT_SECRET'),
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
