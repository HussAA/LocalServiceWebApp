import { Controller, Get, Post, Put, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { AvailabilityEntity } from './availability.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('available')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<AvailabilityEntity[]> {
    return this.availabilityService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<AvailabilityEntity> {
    return this.availabilityService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post(':listingId')
  create (@Param('listingId') listingId: number,@Body() availabilityEntity: AvailabilityEntity): Promise<AvailabilityEntity> {
    return this.availabilityService.create(listingId, availabilityEntity);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() availabilityEntity: AvailabilityEntity,
  ): Promise<AvailabilityEntity> {
    return this.availabilityService.update(id, availabilityEntity);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.availabilityService.remove(id);
  }
}
