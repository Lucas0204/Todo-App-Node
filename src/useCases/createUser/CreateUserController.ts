import { Request, Response } from 'express'
import { User } from '../../entities/User'

interface Response {
    user: object;
}
 
class CreateUserController {

    async handle(req: Request, res: Response): Promise<Response> {


        return {

        }
    }
}

export { CreateUserController }
