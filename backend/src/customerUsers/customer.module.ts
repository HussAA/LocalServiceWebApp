import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module'; // Adjust the path as necessary
import { CustomerProvider } from './customer.provider';
import { CustomerService } from './customer.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...CustomerProvider,
    CustomerService,
  ],
  exports: [
    CustomerService,
    ...CustomerProvider,
  ],
})
export class CustomerModule {}
