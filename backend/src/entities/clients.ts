import { Entity, BaseEntity, Column, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Client extends BaseEntity {
    
    @ObjectIdColumn()
    id: ObjectID;

    @Column({nullable: true })
    name: string;

    @Column({nullable: true })
    lastName: string;

    @Column({nullable: true })
    phone: string;

    @Column({nullable: true })
    address: string;

    @Column({nullable: true })
    locality: string;

    @Column({nullable: true })
    concessionaire: string;

    @Column()
    active: boolean;

    
}