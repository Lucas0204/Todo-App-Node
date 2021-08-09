import { getCustomRepository } from 'typeorm'
import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/TasksRepositories'


class ListTasksService {

    async execute(userId: string): Promise<Task[]> {
        const tasksRepositories = getCustomRepository(TasksRepositories)

        const tasks = await tasksRepositories.find({ belongs_to: userId })

        if (!tasks) {
            throw new Error('Error! Cannot find tasks that belongs to you!')
        }

        return tasks
    }
}

export { ListTasksService }
