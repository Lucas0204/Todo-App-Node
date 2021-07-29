import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';
 
class CreateUserController {

    async handle(req: Request, res: Response): Promise<Response> {
        const createUserService = new CreateUserService()
        const { username, password } = req.body

        const user = await createUserService.execute({ username, password })
        
        return res.json(user);
    }
}

export { CreateUserController }
