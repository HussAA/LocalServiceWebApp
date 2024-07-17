import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Listing } from '../listing.entity';

@Entity()
export class AvailabilityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: string;

  @Column({ nullable: true })
  endTime: string;

  @ManyToOne(() => Listing, (Listing) => Listing.availabilityEntity)
  Listing: Listing;
}
