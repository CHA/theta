import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Activity } from './activity';
import { EntityBase } from './entity-base';

@Entity('itineraries')
export class Itinerary extends EntityBase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    name: string;

    @OneToMany(() => Activity, activity => activity.itinerary, { eager: true })
    activities: Activity[];

}
