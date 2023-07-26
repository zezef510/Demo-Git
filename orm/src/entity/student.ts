    import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
    import {ProductPro} from "./product";
    import {Class} from "./Class";

    @Entity()
    export class Studen {
        @PrimaryGeneratedColumn()
        id: number;
        @Column({type: 'varchar', length: 255})
        name: string;
        @Column()
        old: number;
        @Column({type: 'text'})
        image: string;


        @Column({type: 'int'})
        scoreStudent: number;



        @OneToMany(() => ProductPro, (product) => product.Studen)
        ProductPro;
        @ManyToOne(() => Class, (Class) => Class.Studen)
        Class : Class

    }