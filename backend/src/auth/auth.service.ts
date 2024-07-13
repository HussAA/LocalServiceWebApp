import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { UserService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const userData = await this.userService.findByEmail(user.email);
    const payload = { email: user.email, sub: userData.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(user: User): Promise<any> {
    const hashedPassword = await bcrypt.hash(user.password, 10); // Hash password with bcrypt
    const newUser = { ...user, password: hashedPassword };
    return this.userService.create(newUser);
  }
}
