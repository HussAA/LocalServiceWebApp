import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationEntity } from './location.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<LocationEntity[]> {
    return this.locationService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LocationEntity> {
    return this.locationService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post(':listingId')
  create(
    @Param('listingId') listingId: number,
    @Body() locationEntity: LocationEntity,
  ): Promise<LocationEntity> {
    return this.locationService.create(listingId, locationEntity);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() locationEntity: LocationEntity,
  ): Promise<LocationEntity> {
    return this.locationService.update(id, locationEntity);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.locationService.remove(id);
  }
}
