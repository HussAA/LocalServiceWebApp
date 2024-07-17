import { DataSource } from 'typeorm';
import { Listing } from './listing.entity';
import { AdditionalService } from './addons/addon.entity';
import { AvailabilityEntity } from './availability/availability.entity'
import {LocationEntity} from './location/location.entity'
export const listingProviders = [
  {
    provide: 'LISTING_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Listing),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'ADDON_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AdditionalService),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'AVAILABILITY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AvailabilityEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'LOCATION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(LocationEntity),
    inject: ['DATA_SOURCE'],
  },
];
