import { getCustomRepository } from 'typeorm'
import { TasksRepositories } from '../../repositories/TasksRepositories'
import { Task } from '../../entities/Task'

interface ITaskRequest {
    name: string;
    description?: string;
    id: string;
}

class CreateTaskService {

    async execute({ name, description, id }: ITaskRequest): Promise<Task> {
        const tasksRepositories = getCustomRepository(TasksRepositories)

        const task = tasksRepositories.create({
            name,
            description,
            belongs_to: id
        })

        await tasksRepositories.save(task)

        return task
    }
}

export { CreateTaskService }
