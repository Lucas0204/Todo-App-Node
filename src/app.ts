import 'reflect-metadata'
import 'express-async-errors'
import './database'
import { NextFunction, Request, Response } from 'express'
import express from 'express'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        error: 'Internal server error.'
    })
})

export { app }
