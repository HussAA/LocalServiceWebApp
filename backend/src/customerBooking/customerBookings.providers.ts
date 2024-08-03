import { DataSource } from 'typeorm';
import { CustomerBookingsEntity } from './customerBookings.entity';
import { Listing } from 'src/serviceListings/listing.entity';
import { AvailabilityEntity } from 'src/serviceListings/availability/availability.entity';

export const CustomerBookingsProviders = [
  {
    provide: 'CUSTOMER_BOOKINGS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CustomerBookingsEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'LISTING_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Listing),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'AVAILABILITY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AvailabilityEntity),
    inject: ['DATA_SOURCE'],
  },
];