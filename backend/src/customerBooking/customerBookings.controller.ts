import { Controller, Get, Post, Param, Req, Body} from '@nestjs/common';
import { CustomerBookingService } from './customerBookings.service';
import { CustomerUser } from '../customerUsers/customer.entity';
import { CustomerBookingsEntity } from './customerBookings.entity';

@Controller('customer-booking')
export class CustomerBookingsController {
  constructor(private readonly customerBookingService: CustomerBookingService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CustomerBookingsEntity> {
    return this.customerBookingService.findOne(id);
  }

  @Post()
  async create(
    @Req() req,
    @Body() customerBookingData: Partial<CustomerBookingsEntity>,
  ): Promise<CustomerBookingsEntity> {
    const customerUser: CustomerUser = req.user;
    return this.customerBookingService.create(customerUser, customerBookingData);
  }
}
