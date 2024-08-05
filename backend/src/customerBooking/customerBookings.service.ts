import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CustomerBookingsEntity } from './customerBookings.entity';
import { CustomerUser } from '../customerUsers/customer.entity';
import { Listing } from 'src/serviceListings/listing.entity';
import { AvailabilityEntity } from 'src/serviceListings/availability/availability.entity';

@Injectable()
export class CustomerBookingService {
  constructor(
    @Inject('CUSTOMER_BOOKINGS_REPOSITORY')
    private readonly customerBookingsRepository: Repository<CustomerBookingsEntity>,
    @Inject('LISTING_REPOSITORY')
    private readonly listingRepository: Repository<Listing>,
    @Inject('AVAILABILITY_REPOSITORY')
    private readonly availabilityRepository: Repository<AvailabilityEntity>,
  ) {}

  async findOne(id: number): Promise<CustomerBookingsEntity> {
    const booking = await this.customerBookingsRepository.findOne({
      where: { id },
      relations: ['availabilityEntity', 'listing'],
    });
    
    if (!booking) {
      throw new NotFoundException(`Booking with id ${id} not found`);
    }

    return booking;
  }

  async create(
    user: CustomerUser,
    customerBookingData: Partial<CustomerBookingsEntity>,
  ): Promise<CustomerBookingsEntity> {
    const { availabilityEntity, listing, paymentOption, bookingStatus } = customerBookingData;

    if (!availabilityEntity?.id || !listing?.id) {
      throw new NotFoundException('Availability ID or Listing ID is missing.');
    }

    // Fetch the availability entity from the database
    const availability = await this.availabilityRepository.findOne({
      where: { id: availabilityEntity.id },
    });
    if (!availability) {
      throw new NotFoundException(`Availability with id ${availabilityEntity.id} not found`);
    }

    // Fetch the listing entity from the database
    const listingEntity = await this.listingRepository.findOne({
      where: { id: listing.id },
    });
    if (!listingEntity) {
      throw new NotFoundException(`Listing with id ${listing.id} not found`);
    }

    // Ensure bookingStatus is provided
    if (!bookingStatus) {
      throw new NotFoundException('Booking status is missing.');
    }

    // Create the booking entity
    const booking = this.customerBookingsRepository.create({
      ...customerBookingData,
      availabilityEntity: availability,
      listing: listingEntity,
      paymentOption,
      bookingStatus, // Ensure bookingStatus is included
      customerUser: user,
    });

    // Save the booking entity to the database
    return this.customerBookingsRepository.save(booking);
  }
}
