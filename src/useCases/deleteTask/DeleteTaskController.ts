import { Request, Response } from 'express'
import { DeleteTaskService } from './DeleteTaskService'

class DeleteTaskController {

    async handle(req: Request, res: Response): Promise<Response> {
        const deleteTaskService = new DeleteTaskService()
        const { id } = req.params

        const response = await deleteTaskService.execute(id)

        return res.json(response)
    }
}

export { DeleteTaskController }
