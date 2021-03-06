import {BadRequestException, Injectable, NotFoundException} from "@nestjs/common";
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

    findAll(offset: number = 0, limit: number = 20) : Promise<Task[]> {
        return this.tasksRepository.find({ skip: offset, take: limit, order: { updatedAt: "DESC" }});
    }

    findByStatus(status: number, offset: number = 0, limit: number = 20): Promise<Task[]> {
        return this.tasksRepository.find({
           skip: offset,
           take: limit,
           order: { updatedAt: "DESC" },
           where: {
               status
           }
        });
    }

    findAllAndGroupByStatus(offset: number = 0, limit: number = 20): Promise<Task[]> {
        return this.tasksRepository
          .createQueryBuilder()
          .skip(offset)
          .take(limit)
          .orderBy('status')
          .addOrderBy('"updatedAt"', "DESC")
          .getMany();
    }


    async edit(id: number, editInfo: CreateTaskDto)  {
        const task = await this.tasksRepository.findOne(id);
        if(task) {
            task.title = editInfo.title ?? task.title;
            task.description = editInfo.description ?? task.description;
            this.tasksRepository.save(task);
        }
        else
            throw new NotFoundException(`Task with id ${id} doesn't exist`);
    }

    async setDone(id: number) {
        const task = await this.tasksRepository.findOne(id);
        if(task) {
            if(task.status === TaskStatus.DONE)
                throw new BadRequestException("Task is already done");
            task.status = TaskStatus.DONE;
            task.doneDate = new Date();
            this.tasksRepository.save(task);
        }
        else
            throw new NotFoundException(`Task with id ${id} doesn't exist`);
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