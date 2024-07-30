// src/auth/auth.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { CustomerAuthService } from './customer-auth.service';
import { CustomerUser } from '../customerUsers/customer.entity';
import { Public } from '../auth/public.decorator';

@Controller('customer-auth')
export class CustomerAuthController {
  constructor(private customerAuthService: CustomerAuthService) {}
  @Public()
  @Post('signup')
  async signUp(@Body() customerUser: CustomerUser): Promise<any> {
    console.log(customerUser);
    return this.customerAuthService.signUp(customerUser);
  }

  @Public()
  @Post('login')
  async login(@Body() customerUser: CustomerUser): Promise<any> {
    console.log(customerUser);
    return this.customerAuthService.login(customerUser);
  }
}
