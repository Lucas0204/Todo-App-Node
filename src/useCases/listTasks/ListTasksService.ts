import { getCustomRepository } from 'typeorm'
import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/TasksRepositories'


class ListTasksService {

    async execute(userId: string): Promise<Task[]> {
        const tasksRepositories = getCustomRepository(TasksRepositories)

        const tasks = await tasksRepositories.find({ belongs_to: userId })

        if (!tasks) {
            throw new Error('Error! There was an error in the request, try again')
        }

        if (tasks[0] == null) {
            throw new Error("You don't have any tasks, add one")
        }

        return tasks
    }
}

export { ListTasksService }
