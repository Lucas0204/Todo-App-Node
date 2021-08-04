import { getCustomRepository, UpdateResult } from "typeorm";
import { TasksRepositories } from '../../repositories/TasksRepositories'

interface IUpdateRequest {
    id: string;
    state: string;
    name: string;
    description: string;
}

interface IUpdateTask {
    state?: string;
    name?: string;
    description?: string;
}

class UpdateTaskService {

    async execute({ id, state, name, description }: IUpdateRequest): Promise<UpdateResult> {
        const tasksRepositories = getCustomRepository(TasksRepositories)

        const task = await tasksRepositories.findOne(id)

        if (!task) {
            throw new Error('Task is not found!')
        }

        const updatedTask: IUpdateTask = {
            state,
            name,
            description
        }

        try {
            const newTask = await tasksRepositories.update(task, updatedTask)
            return newTask
        } catch(err) {
            throw new Error('There was an error with the update, try again!')
        }
    }   
}

export { UpdateTaskService }
