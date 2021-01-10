import {Injectable} from "@nestjs/common";
import {Task, TaskStatus} from "./task.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateTaskDto} from "./dto/CreateTaskDto";

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>) {
    }

    findById(id : number) : Promise<Task> {
         return this.tasksRepository.findOne(id);
    }

    findAll(offset?: number, limit?: number) : Promise<Task[]> {
        return this.tasksRepository.find({ skip: offset, take: limit });
    }

    edit(id: number, editInfo: CreateTaskDto)  {
        this.tasksRepository.update(id, editInfo);
    }

    async setDone(id: number) {
        await this.tasksRepository.update(id, { status: TaskStatus.DONE });
    }

    async delete(id: number) {
        await this.tasksRepository.delete(id);
    }

    create(taskDto: CreateTaskDto) : Promise<Task> {
        const task = this.tasksRepository.create();
        task.title = taskDto.title;
        task.description = taskDto.description;
        task.status = TaskStatus.ACTIVE;

        return this.tasksRepository.save(task);
    }
}