// src/auth/local.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { CustomerAuthService } from './customer-auth.service';

@Injectable()
export class CustomerLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private customerAuthService: CustomerAuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.customerAuthService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
