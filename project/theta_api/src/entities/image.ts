import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { EntityBase } from './entity-base'

@Entity('images')
export class Image extends EntityBase {
  @PrimaryGeneratedColumn()
  id: Number

  @Column({ length: 256 })
  description: String

  @Column({ length: 3000 })
  url: String

  @Column({ length: 50 })
  tags: String
}
