import { User } from "../../entities/User";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from '../../repositories/UsersRepositories';
import { hashSync } from 'bcryptjs';

interface IUserRequest {
    username: string;
    password: string;
}

class CreateUserService {

    async execute({ username, password }: IUserRequest): Promise<User> {
        const usersRepositories = getCustomRepository(UsersRepositories)

        const userAlreadyExists = await usersRepositories.findOne({ username })

        if (userAlreadyExists) {
            throw new Error('Username is already exists!')
        }

        const passwordHash = hashSync(password)

        const user = usersRepositories.create({
            username,
            password: passwordHash
        })

        await usersRepositories.save(user)

        return user;
    }
}

export { CreateUserService }
