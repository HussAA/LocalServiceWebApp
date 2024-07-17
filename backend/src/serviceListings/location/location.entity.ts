import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Listing } from '../listing.entity';

@Entity()
export class LocationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  postalCode: string;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @OneToOne(() => Listing, (Listing) => Listing.locationEntity)
  Listing: Listing;
}