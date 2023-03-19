import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityBase } from './entity-base';
import { Image } from './image'
import { Itinerary } from './itinerary';
import { Place } from './place';

@Entity('activities')
export class Activity extends EntityBase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    activity: string;

    @ManyToOne(() => Place, place => place.activities)
    @JoinColumn({ name: 'place_id' })
    place: Place;

    @Column()
    day: number;

    @ManyToOne(() => Itinerary, itinerary => itinerary.activities)
    @JoinColumn({ name: 'itinerary_id' })
    itinerary: Itinerary;

    @Column({ name: 'start_time' })
    startTime: Date;

    @Column({ name: 'end_time' })
    endTime: Date;

    @Column()
    tags: String;

    @Column()
    price: Number;

    @Column()
    description: String;

    @Column()
    sequence: Number;

    @ManyToMany(() => Image, { eager: true })
    @JoinTable({
        name: 'activities_images',
        joinColumns: [
            { name: 'activity_id' }
        ],
        inverseJoinColumns: [
            { name: 'image_id' }
        ]
    })
    images: Image[]
}
