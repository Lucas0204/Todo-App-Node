import { Request, Response } from 'express'
import { DeleteTaskService } from './DeleteTaskService'

class DeleteTaskController {

    async handle(req: Request, res: Response): Promise<Response> {
        const deleteTaskService = new DeleteTaskService()
        const { id: taskId } = req.params
        const { user_id: userId } = req

        const response = await deleteTaskService.execute({
            taskId,
            userId
        })

        return res.json(response)
    }
}

export { DeleteTaskController }
