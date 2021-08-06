import { Request, Response } from 'express'
import { AuthenticateUserService } from './AuthenticateUserService'

class AuthenticateUserController {

    async handle(req: Request, res: Response): Promise<Response> {
        const authenticateUserService = new AuthenticateUserService()
        const { username, password } = req.body

        const token = await authenticateUserService.execute({
            username,
            password
        })

        return res.json(token)
    }
}

export { AuthenticateUserController }
