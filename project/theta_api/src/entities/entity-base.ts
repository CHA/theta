import { Column } from 'typeorm'
import { ColumnCommonOptions } from 'typeorm/decorator/options/ColumnCommonOptions'

export class EntityBase {
  @Column({ name: 'created_date' })
  createdDate: Date

  @Column({ name: 'created_by' })
  createdBy: String

  @Column({ name: 'last_modified_date' })
  lastModifiedDate: Date

  @Column({ name: 'last_modified_by' })
  lastModifiedBy: String

  @Column('bit', {
    name: 'is_deleted',
    width: 1,
    default: false,
    transformer: {
      from: (v: Buffer) => (v ? !!v.readInt8(0) : true),
      to: (v) => v,
    },
  } as ColumnCommonOptions)
  isDeleted: boolean
}
