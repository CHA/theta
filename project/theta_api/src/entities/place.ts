import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Activity } from './activity';
import { EntityBase } from './entity-base';

@Entity('places')
export class Place extends EntityBase {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ length: 256 })
    name: String;

    @Column({ length: 256 })
    tags: String;

    @Column()
    description: String;

    @OneToMany(() => Activity, activity => activity.place)
    activities: Activity[];
}
