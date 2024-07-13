// src/auth/auth.controller.ts

import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from '../users/user.entity';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @Post('signup')
  async signUp(@Body() user: User): Promise<any> {
    return this.authService.signUp(user);
  }

  @Public()
  @Post('login')
  async login(@Body() user: User): Promise<any> {
    console.log(user);
    return this.authService.login(user);
  }
}
