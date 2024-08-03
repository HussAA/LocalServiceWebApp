import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListingModule } from './serviceListings/listing.module';
import { BookingModule } from './providerBookings/booking.module';
import { AuthModule } from './auth/auth.module';
// import { ChatModule } from './chat/chat.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UserModule } from './users/user.module';
import { CustomerAuthModule } from './customer-auth/customer-auth.module';
import { CustomerModule } from './customerUsers/customer.module';
import { ConfigModule } from '@nestjs/config';
import { AwsController } from './aws-s3/aws-s3.controller';
import { AwsService } from './aws-s3/aws-s3.service';
import { CustomerBookingsModule } from './customerBooking/customerBookings.module';

@Module({
  imports: [
    CustomerBookingsModule,
    CustomerAuthModule,
    CustomerModule,
    UserModule,
    ListingModule,
    BookingModule,
    AuthModule,
    ConfigModule.forRoot({isGlobal:true})
    // ChatModule,
  ],
  controllers: [AppController, AwsController],
  providers: [
    AppService,
    AwsService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
