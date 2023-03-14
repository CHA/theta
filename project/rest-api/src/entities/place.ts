import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Activity } from './activity';
import { EntityBase } from './entity-base';

@Entity('places')
export class Place extends EntityBase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 256 })
    name: string;

    @Column({ length: 256 })
    tags: string;

    @OneToMany(() => Activity, activity => activity.place)
    activities: Activity[];
}
