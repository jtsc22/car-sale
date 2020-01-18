import { Entity, BaseEntity, Column, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Concessionaire extends BaseEntity {
    
    @ObjectIdColumn()
    id: ObjectID;

    @Column({nullable: true })
    name: string;

    @Column({nullable: true })
    address: string;

    @Column({nullable: true })
    locality: string;

    @Column()
    active: boolean;

}