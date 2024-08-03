import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CustomerBookingsProviders } from './customerBookings.providers';
import { CustomerBookingsController } from './customerBookings.controller';
import { CustomerBookingService } from './customerBookings.service';

@Module({
  imports: [DatabaseModule],
  providers: [CustomerBookingService, ...CustomerBookingsProviders],
  controllers: [CustomerBookingsController],
})
export class CustomerBookingsModule {}
