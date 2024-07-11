import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  senderId: number;

  @Column()
  recipientId: number;

  @Column()
  message: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}