import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Listing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    location: string;

    @Column({ type: "decimal", precision:10, scale:2 })
    price: number;

    @Column()
    status: boolean;
}