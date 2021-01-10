import {Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";

export enum TaskStatus {
    ACTIVE, DONE, IN_PROGRESS
}

@Entity({ name: 'tasks' })
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    doneDate: Date;

    @Column()
    description: string;

    @Column('int')
    status: TaskStatus;

    @UpdateDateColumn()
    updateAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}