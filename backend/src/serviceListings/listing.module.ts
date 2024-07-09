
import { Module } from '@nestjs/common';
import { ListingService } from './listing.service';
import { ListingController } from './listing.controller';
import { listingProviders } from './listing.providers';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  providers: [ListingService, ...listingProviders],
  controllers: [ListingController],
})
export class ListingModule {}