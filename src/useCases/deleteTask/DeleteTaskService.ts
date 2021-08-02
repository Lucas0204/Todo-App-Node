import { getCustomRepository } from 'typeorm'
import { TasksRepositories } from '../../repositories/TasksRepositories'

interface ResponseMessage {
    status: string;
    message: string;
}

class DeleteTaskService {

    async execute(id: string): Promise<ResponseMessage> {
        const tasksRepositories = getCustomRepository(TasksRepositories)

        const task = await tasksRepositories.findOne(id)

        if (!task) {
            throw new Error('Task is not found!')
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
