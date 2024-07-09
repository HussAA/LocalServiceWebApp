import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ListingService } from './listing.service';
import { Listing } from './listing.entity';

@Controller('listings')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Get()
  async findAll(): Promise<Listing[]> {
    return this.listingService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Listing> {
    return this.listingService.findOne(id);
  }

  @Post()
  async create(@Body() listingData: Partial<Listing>): Promise<Listing> {
    return this.listingService.create(listingData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<Listing>): Promise<Listing> {
    return this.listingService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.listingService.remove(id);
  }
}