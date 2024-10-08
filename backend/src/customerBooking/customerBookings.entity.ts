import { CustomerUser } from 'src/customerUsers/customer.entity';
import { AvailabilityEntity } from 'src/serviceListings/availability/availability.entity';
import { Listing } from 'src/serviceListings/listing.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

export enum PaymentOption {
  CREDIT_OR_DEBIT = 'CREDIT_OR_DEBIT',
  WALLET = 'WALLET',
}

export enum BookingStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Entity()
export class CustomerBookingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => AvailabilityEntity)
  @JoinColumn()
  availabilityEntity: AvailabilityEntity;

  @Column({ type: 'enum', enum: PaymentOption })
  paymentOption: PaymentOption;

  @Column({ type: 'enum', enum: BookingStatus })
  bookingStatus: BookingStatus;

  @OneToOne(() => Listing)
  @JoinColumn()
  listing: Listing;

  @ManyToOne(
    () => CustomerUser,
    (customerUser) => customerUser.customerBookings,
  )
  customerUser: CustomerUser;
}
