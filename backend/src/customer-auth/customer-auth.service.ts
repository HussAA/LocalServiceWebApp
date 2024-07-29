import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CustomerService } from '../customerUsers/customer.service';
import * as bcrypt from 'bcrypt';
import { CustomerUser } from '../customerUsers/customer.entity';

@Injectable()
export class CustomerAuthService {
  constructor(
    private customerService: CustomerService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.customerService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(customerUser: CustomerUser) {
    const userData = await this.customerService.findByEmail(customerUser.email);
    const payload = { email: customerUser.email, sub: userData.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(customerUser: CustomerUser): Promise<any> {
    const hashedPassword = await bcrypt.hash(customerUser.password, 10); // Hash password with bcrypt
    const newCustomerUser = { ...customerUser, password: hashedPassword };
    return this.customerService.create(newCustomerUser);
  }
}
