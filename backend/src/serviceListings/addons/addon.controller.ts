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
import { AddonService } from './addon.service';
import { AdditionalService } from './addon.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('addon')
export class AddonServicesController {
  constructor(private readonly addonService: AddonService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<AdditionalService[]> {
    return this.addonService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<AdditionalService> {
    return this.addonService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post(':listingId')
  create(
    @Param('listingId') listingId: number,
    @Body() additionalService: AdditionalService,
  ): Promise<AdditionalService> {
    return this.addonService.create(listingId, additionalService);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() additionalService: AdditionalService,
  ): Promise<AdditionalService> {
    return this.addonService.update(id, additionalService);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.addonService.remove(id);
  }
}
