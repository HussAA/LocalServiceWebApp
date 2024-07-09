import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.entity';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookings: BookingService) {}

  @Get()
  async findAll(): Promise<Booking[]> {
    return this.bookings.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Booking> {
    return this.bookings.findOne(id);
  }

  @Post()
  async create(@Body() bookingData: Partial<Booking>): Promise<Booking> {
    return this.bookings.create(bookingData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<Booking>): Promise<Booking> {
    return this.bookings.update(id, updateData);
  }

//   @Delete(':id')
//   async remove(@Param('id') id: number): Promise<void> {
//     return this.Booking.remove(id);
//   }
}