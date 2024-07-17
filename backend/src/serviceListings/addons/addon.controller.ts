import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { AddonService } from './addon.service';
import { AdditionalService } from './addon.entity';

@Controller('addon')
export class AddonServicesController {
  constructor(private readonly addonService: AddonService) {}

  @Get()
  findAll(): Promise<AdditionalService[]> {
    return this.addonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<AdditionalService> {
    return this.addonService.findOne(id);
  }

  @Post(':listingId')
  create (@Param('listingId') listingId: number,@Body() additionalService: AdditionalService): Promise<AdditionalService> {
    return this.addonService.create(listingId, additionalService);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() additionalService: AdditionalService,
  ): Promise<AdditionalService> {
    return this.addonService.update(id, additionalService);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.addonService.remove(id);
  }
}
