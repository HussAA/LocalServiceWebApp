import { Controller, Get, Post, Param, Req, Body, UseGuards} from '@nestjs/common';
import { CustomerBookingService } from './customerBookings.service';
import { CustomerUser } from '../customerUsers/customer.entity';
import { CustomerBookingsEntity } from './customerBookings.entity';
import { CustomerJwtAuthGuard } from 'src/customer-auth/customer-auth.jwt-auth.guard';

@Controller('customer-booking')
export class CustomerBookingsController {
  constructor(private readonly customerBookingService: CustomerBookingService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CustomerBookingsEntity> {
    return this.customerBookingService.findOne(id);
  }
  @UseGuards(CustomerJwtAuthGuard)
  @Post()
  async create(
    @Req() req,
    @Body() customerBookingData: Partial<CustomerBookingsEntity>,
  ): Promise<CustomerBookingsEntity> {
    const user: CustomerUser = req.user;
    return this.customerBookingService.create(user, customerBookingData);
  }
}
