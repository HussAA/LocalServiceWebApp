import { Entity, Column, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';
import { Listing } from '../serviceListings/listing.entity';
@Entity()
export class User {
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

  @OneToMany(() => Listing, listing => listing.user)
  listings: Listing[];
}