import { DataSource } from 'typeorm';
import { Booking } from './booking.entity';

export const BookingProviders = [
  {
    provide: 'BOOKING_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Booking),
    inject: ['DATA_SOURCE'],
  },
];