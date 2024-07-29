import { Injectable, Inject } from '@nestjs/common';
import { CustomerUser } from './customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(
        @Inject('CUSTOMER_REPOSITORY')
        private customersRepository: Repository<CustomerUser>,
      ) {}
      async findById(id: number): Promise<CustomerUser | undefined> {
        return this.customersRepository.findOne({ where: { id } });
      }
      async findByEmail(email: string): Promise<CustomerUser | undefined> {
        return this.customersRepository.findOne({ where: { email } });
      }
    
      async create(customerUser: CustomerUser): Promise<CustomerUser> {
        return this.customersRepository.save(customerUser);
      }
}
