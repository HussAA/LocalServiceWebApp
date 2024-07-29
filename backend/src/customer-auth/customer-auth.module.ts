import { Module } from '@nestjs/common';
import { CustomerAuthService } from './customer-auth.service';
import { CustomerAuthController } from './customer-auth.controller';
import { CustomerModule } from '../customerUsers/customer.module'; // Adjust the path as necessary
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CustomerLocalStrategy } from '../customer-auth/customer-local.strategy';
import { CustomerJwtStrategy } from './customer-jwt.strategy';

@Module({
  imports: [
    CustomerModule,
    PassportModule,
    JwtModule.register({
      secret: '23c650bb15ce027909af55ba160270fc5b0f8ffe97f58dd5352fdf8f369b',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [CustomerAuthService, CustomerLocalStrategy, CustomerJwtStrategy],
    

  controllers: [CustomerAuthController],
})
export class CustomerAuthModule {}
