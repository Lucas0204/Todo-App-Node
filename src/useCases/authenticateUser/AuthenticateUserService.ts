import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../../repositories/UsersRepositories'
import { compareSync } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { config } from 'dotenv'
config()

interface IAuthRequest {
    username: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ username, password }: IAuthRequest): Promise<string> {
        const usersRepositories = getCustomRepository(UsersRepositories)
        
        const user = await usersRepositories.findOne({ username })

        if (!user) {
            throw new Error('Username or password incorrect!')
        }

        const passwordMatch = compareSync(password, user.password)

        if (!passwordMatch) {
            throw new Error('Username or password incorrect!')
        }

        const token = sign(
            { username }, 
            process.env.JWT_SECRET, 
            { 
                subject: user.id,
                expiresIn: '1d'
            }
        )

        return token
    }
}

export { AuthenticateUserService }
