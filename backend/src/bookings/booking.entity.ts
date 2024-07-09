import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    date: string;

    @Column()
    customer: string;

    @Column()
    location: string;

    @Column({ type: "decimal", precision:10, scale:2 })
    amount: number;

    @Column()
    status: string; 
}