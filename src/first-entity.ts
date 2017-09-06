import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { SecondEntity } from "./second-entity";

@Entity("first_entities")
export class FirstEntity {
    @PrimaryGeneratedColumn()
    public number: number;

    @OneToOne((type) => SecondEntity, (secondEntity) => secondEntity.firstEntity)
    public secondEntity: SecondEntity;
}