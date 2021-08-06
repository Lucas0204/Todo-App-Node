import { getCustomRepository, UpdateResult } from "typeorm";
import { TasksRepositories } from '../../repositories/TasksRepositories';

interface IUpdateRequest {
    taskId: string;
    userId: string;
    state: string;
    name: string;
    description: string;
}

class UpdateTaskService {

    async execute({ taskId, userId, state, name, description }: IUpdateRequest): Promise<UpdateResult> {
        const tasksRepositories = getCustomRepository(TasksRepositories)

        const task = await tasksRepositories.findOne(taskId)

        if (!task) {
            throw new Error('Task is not found!')
        }

        // check if the task belongs to the logged in user
        const taskBelongsMatch = task.belongs_to === userId ? true : false

        if (!taskBelongsMatch) {
            throw new Error('Task id incorrect! Try again!')
        }

        // Find what will be updated
        let updatedData: { [key: string]: any } = {};

        if (state) {
            updatedData.state = state
        }

        if (name) {
            updatedData.name = name
        }

        if (description) {
            updatedData.description = description
        }

        try {
            const updatedTask = await tasksRepositories.update(task, updatedData)
            return updatedTask
        } catch(err) {
            throw new Error('There was an error with the update, try again!')
        }
    }   
}

export { UpdateTaskService }
