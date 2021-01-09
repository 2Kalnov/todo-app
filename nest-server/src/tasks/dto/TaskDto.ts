import {TaskStatus} from "../task.entity";

export class TaskDto {
    status: TaskStatus;
    title: string;
    description: string;
    doneDate: string;
}