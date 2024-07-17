import {
  Injectable,
  Inject,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { AdditionalService } from './addon.entity';
import { Listing } from '../listing.entity';

@Injectable()
export class AddonService {
  constructor(
    @Inject('ADDON_REPOSITORY')
    private readonly addonServiceRepository: Repository<AdditionalService>,
    @Inject('LISTING_REPOSITORY')
    private listingRepository: Repository<Listing>,
  ) {}

  async create(listingId: number, additionalService: AdditionalService): Promise<AdditionalService> {
    const listing = await this.listingRepository.findOne({ where: { id : listingId } });
    additionalService.Listing = listing;
    return this.addonServiceRepository.save(additionalService);
  }
  async update(id: number, additionalService: AdditionalService): Promise<AdditionalService> {
    await this.addonServiceRepository.update(id, additionalService);
    return this.addonServiceRepository.findOne({ where: { id } });
  }
  async findAll(): Promise<AdditionalService[]> {
    return this.addonServiceRepository.find();
  }

  async findOne(id: number): Promise<AdditionalService> {
    return this.addonServiceRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.addonServiceRepository.delete(id);
  }
}
