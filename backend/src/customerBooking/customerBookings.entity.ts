import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';


export enum PaymentOption {
    CREDIT_OR_DEBIT = "admin",
    WALLET = "editor",
}

@Entity()
export class CustomerBookingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: PaymentOption })
  paymentOption: PaymentOption;
    


}
