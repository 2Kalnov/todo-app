import {Body, Controller, Get, Param, Patch, Post, Query} from "@nestjs/common";
import {TasksService} from "./tasks.service";
import {Task} from "./task.entity";
import {CreateTaskDto} from "./dto/CreateTaskDto";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {
    }

    @Get()
    async getAll(@Query('status') status?: number) : Promise<Task[]> {
        return status ? this.tasksService.findByStatus(status) : this.tasksService.findAll();
    }

    @Get('/byStatus')
    getByStatus() {
        return this.tasksService.findAllAndGroupByStatus();
    }

    @Get(':id')
    async get(@Param('id') id: number) : Promise<Task> {
        return this.tasksService.findById(id);
    }

    @Post()
    async create(@Body() taskDto: CreateTaskDto ) : Promise<number> {
        const createdTask = await this.tasksService.create(taskDto);
        return createdTask.id;
    }

    @Patch(':id/done')
    setDone(@Param('id') id: number) {
        return this.tasksService.setDone(id);
    }

    @Patch(':id')
    edit(@Param('id') id: number, @Body() taskDto: CreateTaskDto) {
        return this.tasksService.edit(id, taskDto);
    }
}