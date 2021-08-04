import { Request, Response } from 'express'
import { UpdateTaskService } from './UpdateTaskService'

class UpdateTaskController {

    async handle(req: Request, res: Response): Promise<Response> {
        const updateTaskService = new UpdateTaskService()
        const { state, name, description } = req.body
        const { id } = req.params

        const updatedTask = await updateTaskService.execute({
            id,
            state,
            name,
            description
        })

        return res.json(updatedTask)
    }
}

export { UpdateTaskController }
