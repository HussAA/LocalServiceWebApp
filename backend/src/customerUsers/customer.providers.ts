import { DataSource } from 'typeorm';
import {CustomerUser} from './customer.entity'

export const CustomerProvider = [
    {
        provide: 'CUSTOMER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(CustomerUser),
        inject: ['DATA_SOURCE'],
      }
]
