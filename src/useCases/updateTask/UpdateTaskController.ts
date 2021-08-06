import { Request, Response } from 'express'
import { UpdateTaskService } from './UpdateTaskService'

class UpdateTaskController {

    async handle(req: Request, res: Response): Promise<Response> {
        const updateTaskService = new UpdateTaskService()
        const { state, name, description } = req.body
        const { id: taskId } = req.params
        const { user_id: userId } = req

        const updatedTask = await updateTaskService.execute({
            taskId,
            userId,
            state,
            name,
            description
        })

        return res.json(updatedTask)
    }
}

export { UpdateTaskController }
