import { Router } from 'express'
import { CreateUserController } from './useCases/createUser/CreateUserController'
import { CreateTaskController } from './useCases/createTask/CreateTaskController'
import { DeleteTaskController } from './useCases/deleteTask/deleteTaskController'

const routes = Router()

const createUserController = new CreateUserController()
const createTaskController = new CreateTaskController()
const deleteTaskController = new DeleteTaskController()

routes.post('/users', createUserController.handle)

routes.post('/tasks', createTaskController.handle)

routes.delete('/tasks/:id', deleteTaskController.handle)

export { routes }
