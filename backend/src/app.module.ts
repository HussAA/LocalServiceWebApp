import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListingModule } from './serviceListings/listing.module';
import { BookingModule } from './bookings/booking.module';
@Module({
  imports: [
    ListingModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
