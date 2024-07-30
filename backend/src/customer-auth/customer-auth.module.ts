import { Module } from '@nestjs/common';
import { CustomerAuthService } from './customer-auth.service';
import { CustomerAuthController } from './customer-auth.controller';
import { CustomerModule } from '../customerUsers/customer.module'; // Adjust the path as necessary
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CustomerLocalStrategy } from '../customer-auth/customer-local.strategy';
import { CustomerJwtStrategy } from './customer-jwt.strategy';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CustomerModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('CUSTOMER_JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [CustomerAuthService, CustomerLocalStrategy, CustomerJwtStrategy],
    

  controllers: [CustomerAuthController],
})
export class CustomerAuthModule {}
