import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EntityBase } from "./entity-base";

@Entity('images')
export class Image extends EntityBase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 256 })
    description: string;

    @Column({ length: 3000 })
    url: string;

    @Column({ length: 50 })
    tags: string;
}
