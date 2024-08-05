import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ListingService } from './listing.service';
import { Listing } from './listing.entity';
import { User } from '../users/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('listings')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Listing[]> {
    return this.listingService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Listing> {
    return this.listingService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Req() req,
    @Body() listingData: Partial<Listing>,
  ): Promise<Listing> {
    const user: User = req.user;
    return this.listingService.create(user, listingData);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Req() req,
    @Body() updateData: Partial<Listing>,
  ): Promise<Listing> {
    const user: User = req.user;
    return this.listingService.update(user, id, updateData);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Req() req, @Param('id') id: number): Promise<void> {
    const user: User = req.user;
    return this.listingService.remove(user, id);
  }
}

