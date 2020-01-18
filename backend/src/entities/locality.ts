import { Entity, BaseEntity, Column, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Locality extends BaseEntity {
    
    @ObjectIdColumn()
    id: ObjectID;

    @Column({nullable: true })
    name: string;

    @Column()
    active: boolean;

}