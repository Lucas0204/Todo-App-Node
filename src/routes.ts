import { Router } from 'express'
import { CreateUserController } from './useCases/createUser/CreateUserController'
import { CreateTaskController } from './useCases/createTask/CreateTaskController'
import { DeleteTaskController } from './useCases/deleteTask/DeleteTaskController'
import { UpdateTaskController } from './useCases/updateTask/UpdateTaskController'
import { UpdateUserController } from './useCases/updateUser/UpdateUserController'
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const routes = Router()

const createUserController = new CreateUserController()
const createTaskController = new CreateTaskController()
const deleteTaskController = new DeleteTaskController()
const updateTaskController = new UpdateTaskController()
const updateUserController = new UpdateUserController()
const authenticateUserController = new AuthenticateUserController()

// Create User - 
routes.post('/users', createUserController.handle)

// Authenticate User -- Login
routes.post('/login', authenticateUserController.handle)

// Create Task -
routes.post('/tasks', ensureAuthenticated, createTaskController.handle)

// Delete Task -
routes.delete('/tasks/:id', ensureAuthenticated, deleteTaskController.handle)

// Update Task -
routes.put('/tasks/:id', ensureAuthenticated, updateTaskController.handle)

// Update User -
routes.put('/users', ensureAuthenticated, updateUserController.handle)

export { routes }
