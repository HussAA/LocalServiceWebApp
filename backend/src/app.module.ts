import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListingModule } from './serviceListings/listing.module';
import { BookingModule } from './bookings/booking.module';
import { AuthModule } from './auth/auth.module';
// import { ChatModule } from './chat/chat.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UserModule } from './users/user.module';
import { CustomerAuthModule } from './customer-auth/customer-auth.module';
import { CustomerModule } from './customerUsers/customer.module';

@Module({
  imports: [
    CustomerAuthModule,
    CustomerModule,
    UserModule,
    ListingModule,
    BookingModule,
    AuthModule,
    // ChatModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
