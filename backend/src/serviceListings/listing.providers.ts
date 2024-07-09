import { DataSource } from 'typeorm';
import { Listing } from './listing.entity';

export const listingProviders = [
  {
    provide: 'LISTING_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Listing),
    inject: ['DATA_SOURCE'],
  },
];