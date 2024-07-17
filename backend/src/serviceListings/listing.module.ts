import { Module } from '@nestjs/common';
import { ListingService } from './listing.service';
import { ListingController } from './listing.controller';
import { listingProviders } from './listing.providers';
import { DatabaseModule } from '../database/database.module';
import { AddonServicesController } from './addons/addon.controller';
import { AddonService } from './addons/addon.service';
import {AvailabilityController} from './availability/availability.controller'
import {AvailabilityService} from './availability/availability.service'
import {LocationController} from './location/location.controller'
import {LocationService} from './location/location.service'

@Module({
  imports: [DatabaseModule],
  providers: [ListingService, AddonService, AvailabilityService,LocationService, ...listingProviders],
  controllers: [ListingController, AddonServicesController, AvailabilityController, LocationController],
})
export class ListingModule {}
