import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Listing } from './listing.entity';

@Injectable()
export class ListingService {
  constructor(
    @Inject('LISTING_REPOSITORY')
    private listingRepository: Repository<Listing>,
  ) {}

  async findAll(): Promise<Listing[]> {
    return await this.listingRepository.find();
  }
  async findOne(id: number): Promise<Listing> {
    const listing = await this.listingRepository.findOne({ where: { id } });
    if (!listing) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }
    return listing;
  }

  async create(listingData: Partial<Listing>): Promise<Listing> {
    const listing = this.listingRepository.create(listingData);
    return await this.listingRepository.save(listing);
  }

  async update(id: number, updateData: Partial<Listing>): Promise<Listing> {
    await this.findOne(id);
    await this.listingRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.listingRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }
  }

}