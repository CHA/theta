import { Column } from "typeorm";
import { ColumnCommonOptions } from "typeorm/decorator/options/ColumnCommonOptions";

export class EntityBase {
    @Column({name: 'created_date'})
    createdDate: Date;

    @Column({name: 'created_by'})
    createdBy: string;

    @Column({name: 'last_modified_date'})
    lastModifiedDate: Date;

    @Column({name: 'last_modified_by'})
    lastModifiedBy: string;

    @Column("bit", {
        name: 'is_deleted',
        width: 1,
        default: false,
        transformer: { from: (v: Buffer) => !!v.readInt8(0), to: v => v }
      } as ColumnCommonOptions)
    isDeleted: boolean;  
}