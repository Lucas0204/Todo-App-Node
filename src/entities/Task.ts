import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('tasks')
class Task {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    belongs_to: string;

    @JoinColumn({ name: 'belongs_to' })
    @ManyToOne(() => User)
    belongsTo: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Task }
