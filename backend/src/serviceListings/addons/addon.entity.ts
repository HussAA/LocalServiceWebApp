import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Listing } from '../listing.entity';

@Entity()
export class AdditionalService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  duration: string;

  @ManyToOne(() => Listing, (Listing) => Listing.additionalServices)
  Listing: Listing;
}
