import { Request, Response } from 'express'
import { CreateTaskService } from './CreateTaskService'

class CreateTaskController {

    async handle(req: Request, res: Response): Promise<Response> {
        const createTaskService = new CreateTaskService()
        const { name, description } = req.body
        const { user_id: id } = req

        const task = await createTaskService.execute({
            name,
            description,
            id
        })

        return res.json(task)
    }
}

export { CreateTaskController }
