import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { User } from '../users/user.entity';
import { AdditionalService } from './addons/addon.entity';
import { AvailabilityEntity } from './availability/availability.entity';
import { LocationEntity } from './location/location.entity'
@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  subCategory: string;

  @Column()
  duration: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  status: boolean;

  @ManyToOne(() => User, (user) => user.listings)
  user: User;

  @OneToMany(() => AdditionalService,(additionalService) => additionalService.Listing,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  additionalServices: AdditionalService[];

  @OneToMany(() => AvailabilityEntity,(availabilityEntity) => availabilityEntity.Listing,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  availabilityEntity: AvailabilityEntity[];

  @OneToOne(() => LocationEntity, (locationEntity) => locationEntity.Listing,{
    cascade: true,
    onDelete: 'CASCADE',
  })
    @JoinColumn()
    locationEntity: LocationEntity;
}
