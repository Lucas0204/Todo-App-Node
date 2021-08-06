import { Request, Response } from 'express'
import { UpdateUserService } from './UpdateUserService'

class UpdateUserController {

    async handle(req: Request, res: Response): Promise<Response> {
        const updateUserService = new UpdateUserService()

        const { username, password } = req.body
        const { id } = req.params

        const message = await updateUserService.execute({
            id,
            username,
            password
        })

        return res.json(message)
    }
}

export { UpdateUserController }
