import { getCustomRepository } from 'typeorm'
import { TasksRepositories } from '../../repositories/TasksRepositories'

interface ResponseMessage {
    status: string;
    message: string;
}

interface IDeleteRequest {
    taskId: string;
    userId: string;
}

class DeleteTaskService {

    async execute({ taskId, userId }: IDeleteRequest): Promise<ResponseMessage> {
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

        try {
            await tasksRepositories.delete(task)
            
            return {
                status: 'Ok',
                message: 'Task deleted successfully!'
            }

        } catch(err) {
            throw new Error(err.message)
        }
    }
}

export { DeleteTaskService }
