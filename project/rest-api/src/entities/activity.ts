import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityBase } from "./entity-base";
import { Itinerary } from "./itinerary";

@Entity('activities')
export class Activity extends EntityBase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200})
    activity: string;

    @ManyToOne(() => Itinerary, itinerary => itinerary.activities)
    @JoinColumn({ name: 'itinerary_id'})
    itinerary: Itinerary;

    @Column({name: 'start_time'})
    startTime: Date;

    @Column({name: 'end_time'})
    endTime: Date;
}
