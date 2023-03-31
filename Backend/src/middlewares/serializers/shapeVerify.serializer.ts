import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError.class'

export default function shapeVerify(schema) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { body } = req

        try {
            const valid = await schema.validate(body, { abortEarly: false })
            req.body = valid
            return next()
        } catch (error) {
            throw new AppError(error.message, 400)
        }
    }
}