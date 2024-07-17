import {
    Injectable,
    Inject,
  } from '@nestjs/common';
  import { Repository } from 'typeorm';
  import { LocationEntity } from './location.entity';
  import { Listing } from '../listing.entity';
@Injectable()
export class LocationService {constructor(
    @Inject('LOCATION_REPOSITORY')
    private readonly locationEntityRepository: Repository<LocationEntity>,
    @Inject('LISTING_REPOSITORY')
    private listingRepository: Repository<Listing>,
  ) {}

  async create(listingId: number, locationEntity: LocationEntity): Promise<LocationEntity> {
      const listing = await this.listingRepository.findOne({ where: { id : listingId } });
      locationEntity.Listing = listing;
      return this.locationEntityRepository.save(locationEntity);
    }
    async update(id: number, locationEntity: LocationEntity): Promise<LocationEntity> {
      await this.locationEntityRepository.update(id, locationEntity);
      return this.locationEntityRepository.findOne({ where: { id } });
    }
    async findAll(): Promise<LocationEntity[]> {
      return this.locationEntityRepository.find();
    }
  
    async findOne(id: number): Promise<LocationEntity> {
      return this.locationEntityRepository.findOne({ where: { id } });
    }
  
    async remove(id: number): Promise<void> {
      await this.locationEntityRepository.delete(id);
    }}
