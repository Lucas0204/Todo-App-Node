import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization
    
    if (!authToken) {
        throw new Error('Unauthorized!')
    }

    const token = authToken.split(' ')[1]

    const { sub } = verify(token, process.env.JWT_SECRET)

    req.user_id = sub
        
    return next()
}
