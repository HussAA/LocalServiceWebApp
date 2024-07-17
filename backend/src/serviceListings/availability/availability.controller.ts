import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { AvailabilityEntity } from './availability.entity';

@Controller('available')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Get()
  findAll(): Promise<AvailabilityEntity[]> {
    return this.availabilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<AvailabilityEntity> {
    return this.availabilityService.findOne(id);
  }

  @Post(':listingId')
  create (@Param('listingId') listingId: number,@Body() availabilityEntity: AvailabilityEntity): Promise<AvailabilityEntity> {
    return this.availabilityService.create(listingId, availabilityEntity);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() availabilityEntity: AvailabilityEntity,
  ): Promise<AvailabilityEntity> {
    return this.availabilityService.update(id, availabilityEntity);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.availabilityService.remove(id);
  }
}
