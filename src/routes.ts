import { Router } from 'express'
import { CreateUserController } from './useCases/createUser/CreateUserController'
import { CreateTaskController } from './useCases/createTask/CreateTaskController'

const routes = Router()

const createUserController = new CreateUserController()
const createTaskController = new CreateTaskController()

routes.post('/users', createUserController.handle)

routes.post('/tasks', createTaskController.handle)

export { routes }
