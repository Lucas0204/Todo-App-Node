import { EntityRepository, Repository } from 'typeorm'
import { Task } from '../entities/Task'

@EntityRepository(Task)
class TasksRepositories extends Repository<Task> {
}

export { TasksRepositories }
