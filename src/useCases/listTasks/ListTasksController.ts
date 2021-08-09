import { Request, Response } from 'express'
import { ListTasksService } from './ListTasksService'

class ListTasksController {

    async handle(req: Request, res: Response): Promise<Response> {
        const listTasksService = new ListTasksService()
        const { user_id: userId } = req

        const tasks = await listTasksService.execute(userId)

        return res.json(tasks)
    }
}

export { ListTasksController }
