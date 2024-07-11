import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListingModule } from './serviceListings/listing.module';
import { BookingModule } from './bookings/booking.module';
import { AuthModule } from './auth/auth.module';
// import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ListingModule,
    BookingModule,
    AuthModule,
    // ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
