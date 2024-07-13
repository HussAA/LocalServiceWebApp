import {
  Injectable,
  Inject,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Listing } from './listing.entity';
import { User } from '../users/user.entity';

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
    const listing = await this.listingRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!listing) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }
    return listing;
  }

  async create(user: User, listingData: Partial<Listing>): Promise<Listing> {
    const listing = this.listingRepository.create({
      ...listingData,
      user: user,
    });
    // console.log('this is what is logged:', listing);
    return await this.listingRepository.save(listing);
  }

  async update(
    user: User,
    id: number,
    updateData: Partial<Listing>,
  ): Promise<Listing> {
    const listing = await this.findOne(id);

    if (listing.user.id !== user.id) {
      throw new ForbiddenException(
        'You are not allowed to update this listing',
      );
    }

    await this.listingRepository.update(id, updateData);

    return this.findOne(id);
  }

  async remove(user: User, id: number): Promise<void> {
    const listing = await this.findOne(id);
    console.log('this is remove', listing);
    if (listing.user.id !== user.id) {
      throw new ForbiddenException(
        'You are not allowed to delete this listing',
      );
    }

    const result = await this.listingRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }
  }
}
