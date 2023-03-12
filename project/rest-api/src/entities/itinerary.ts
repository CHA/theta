import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, JoinColumn, JoinTable } from 'typeorm';
import { Activity } from './activity';
import { EntityBase } from './entity-base';

@Entity('itineraries')
export class Itinerary extends EntityBase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 45})
    name: string;

    @OneToMany(type => Activity, activity => activity.itinerary, { eager: true })
    activities: Activity[];

}