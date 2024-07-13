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
import { LocalAuthGuard } from '../auth/local-auth.guard'; // Adjust the path as necessary
import { User } from '../users/user.entity'; // Adjust the path as necessary
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; 
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
  async create(
    @Req() req,
    @Body() listingData: Partial<Listing>,
  ): Promise<Listing> {
    const user: User = req.user;
    return this.listingService.create(user, listingData);
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Req() req,
    @Body() updateData: Partial<Listing>,
  ): Promise<Listing> {
    const user: User = req.user;
    return this.listingService.update(user, id, updateData)
  }

  @Delete(':id')
  async remove(@Req() req, @Param('id') id: number): Promise<void> {
    const user: User = req.user;
    console.log("this is delete", user, id)
    return this.listingService.remove(user, id);
    
  }
}
