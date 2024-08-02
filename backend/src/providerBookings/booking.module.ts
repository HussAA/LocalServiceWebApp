
import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { BookingProviders } from './booking.providers';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  providers: [BookingService, ...BookingProviders],
  controllers: [BookingController],
})
export class BookingModule {}