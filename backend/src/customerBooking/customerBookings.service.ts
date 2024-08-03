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
    customerUser: CustomerUser,
    customerBookingData: Partial<CustomerBookingsEntity>,
  ): Promise<CustomerBookingsEntity> {
    const { availabilityEntity, listing, paymentOption } = customerBookingData;

    if (!availabilityEntity?.id || !listing?.id) {
      throw new NotFoundException('Availability ID or Listing ID is missing.');
    }

    const availability = await this.availabilityRepository.findOne({
      where: { id: availabilityEntity.id },
    });
    if (!availability) {
      throw new NotFoundException(`Availability with id ${availabilityEntity.id} not found`);
    }

    const listingEntity = await this.listingRepository.findOne({
      where: { id: listing.id },
    });
    if (!listingEntity) {
      throw new NotFoundException(`Listing with id ${listing.id} not found`);
    }

    const booking = this.customerBookingsRepository.create({
      availabilityEntity: availability,
      listing: listingEntity,
      paymentOption,
    });

    return this.customerBookingsRepository.save(booking);
  }
}
