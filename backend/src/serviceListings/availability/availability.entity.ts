import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Listing } from '../listing.entity';


export enum Weekday {
  ALL_DAYS = 'ALL_DAYS',
  SUNDAY = 'SUNDAY',
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
}

@Entity()
export class AvailabilityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Weekday, array: true })
  weekday: Weekday[];

  @Column()
  startTime: string;

  @Column({ nullable: true })
  endTime: string;

  @ManyToOne(() => Listing, (Listing) => Listing.availabilityEntity)
  Listing: Listing;
}
