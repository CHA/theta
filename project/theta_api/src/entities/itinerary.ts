import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Activity } from './activity'
import { EntityBase } from './entity-base'

@Entity('itineraries')
export class Itinerary extends EntityBase {
  @PrimaryGeneratedColumn()
  id: Number

  @Column({ length: 45 })
  name: String

  @Column({ name: 'start_date' })
  startDate: Date

  @Column({ name: 'end_date' })
  endDate: Date

  @OneToMany(() => Activity, (activity) => activity.itinerary, { eager: true })
  activities: Activity[]
}
