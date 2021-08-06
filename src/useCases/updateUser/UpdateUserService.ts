import { getCustomRepository, UpdateResult } from 'typeorm';
import { UsersRepositories } from '../../repositories/UsersRepositories';
import { hashSync } from 'bcryptjs';

interface IUserRequest {
    id: string;
    username: string;
    password: string;
}

class UpdateUserService {

    async execute({ id, username, password }: IUserRequest): Promise<UpdateResult> {
        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne(id)

        if (!user) {
            throw new Error('User is not found!')
        }

        // Find what will be updated
        let updatedData: { [key: string]: any } = {}

        if (username) {
            updatedData.username = username
        }

        if (password) {
            const passwordHash = hashSync(password)
            updatedData.password = passwordHash
        }

        try {
            const updatedUser = await usersRepositories.update(user, updatedData)
            return updatedUser
        } catch(err) {
            throw new Error(err.message)
        }
    }
}

export { UpdateUserService }
