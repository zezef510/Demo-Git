    import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
    import {ProductPro} from "./product";
    import {Studen} from "./student";
    @Entity()
    export class Class {
        @PrimaryGeneratedColumn()
        id: number;
        @Column({type: 'varchar', length: 255})
        ClassName: string;
        @Column()
        Teacher: string;



        @OneToMany(() => Studen, (Student) => Student.Class)
        Studen;

    }