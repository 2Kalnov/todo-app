import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

enum TaskStatus {
    ACTIVE, DONE, IN_PROGRESS
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    doneDate: Date;

    @Column()
    description: string;

    @Column({ default: TaskStatus.ACTIVE })
    status: TaskStatus;
}