import { CustomerBookingsEntity } from 'src/customerBooking/customerBookings.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class CustomerUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @OneToMany(() => CustomerBookingsEntity, customerBookings => customerBookings.customerUser)
  customerBookings: CustomerBookingsEntity[];
}
