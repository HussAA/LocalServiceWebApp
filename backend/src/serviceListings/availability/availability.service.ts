import {
    Injectable,
    Inject,
  } from '@nestjs/common';
  import { Repository } from 'typeorm';
  import { AvailabilityEntity } from './availability.entity';
  import { Listing } from '../listing.entity';
  
  @Injectable()
  export class AvailabilityService {
    constructor(
      @Inject('AVAILABILITY_REPOSITORY')
      private readonly availabilityEntityRepository: Repository<AvailabilityEntity>,
      @Inject('LISTING_REPOSITORY')
      private listingRepository: Repository<Listing>,
    ) {}

    async create(listingId: number, availabilityEntity: AvailabilityEntity): Promise<AvailabilityEntity> {
        const listing = await this.listingRepository.findOne({ where: { id : listingId } });
        availabilityEntity.Listing = listing;
        return this.availabilityEntityRepository.save(availabilityEntity);
      }
      async update(id: number, availabilityEntity: AvailabilityEntity): Promise<AvailabilityEntity> {
        await this.availabilityEntityRepository.update(id, availabilityEntity);
        return this.availabilityEntityRepository.findOne({ where: { id } });
      }
      async findAll(): Promise<AvailabilityEntity[]> {
        return this.availabilityEntityRepository.find();
      }
    
      async findOne(id: number): Promise<AvailabilityEntity> {
        return this.availabilityEntityRepository.findOne({ where: { id } });
      }
    
      async remove(id: number): Promise<void> {
        await this.availabilityEntityRepository.delete(id);
      }

}