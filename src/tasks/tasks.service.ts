import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async findAll(email: string): Promise<Task[]> {
    return this.taskRepository.find({ where: { email } });
  }

  // async findOne(id: string): Promise<Task> {
  //   const options: FindOneOptions<Task> = { where: { id } };
  //   const task = await this.taskRepository.findOne(options);
  //   if (!task) {
  //     throw new NotFoundException(`Task with ID ${id} not found`);
  //   }
  //   return task;
  // }

  async findOne(id: string): Promise<Task> {
    const options: FindOneOptions<Task> = { where: { id } };
    const user = await this.taskRepository.findOne(options);
    console.log(user);
    return user;
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.save(createTaskDto);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<any> {
    return await this.taskRepository.update({ id }, updateTaskDto);
  }

  async remove(id: string): Promise<any> {
    const deletedTask = await this.taskRepository.delete({ id });
    return deletedTask;
  }
}
