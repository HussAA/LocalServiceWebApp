import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import {LocationService} from './location.service'
import {LocationEntity} from './location.entity'


@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

  @Get()
  findAll(): Promise<LocationEntity[]> {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<LocationEntity> {
    return this.locationService.findOne(id);
  }

  @Post(':listingId')
  create (@Param('listingId') listingId: number,@Body() locationEntity: LocationEntity): Promise<LocationEntity> {
    return this.locationService.create(listingId, locationEntity);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() locationEntity: LocationEntity,
  ): Promise<LocationEntity> {
    return this.locationService.update(id, locationEntity);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.locationService.remove(id);
  }
}
