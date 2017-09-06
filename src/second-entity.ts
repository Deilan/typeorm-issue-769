import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { FirstEntity } from "./first-entity";

@Entity("second_entities")
export class SecondEntity {
    @PrimaryGeneratedColumn()
    public number: number;

    @OneToOne((type) => FirstEntity)
    @JoinColumn({name: "number", referencedColumnName: "number"})
    public firstEntity: FirstEntity;
}