// src/auth/auth.controller.ts

import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from '../users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() user: User): Promise<any> {
    return this.authService.signUp(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<any> {
    return this.authService.login(req.user);
  }
}
