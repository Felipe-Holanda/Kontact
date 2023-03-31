import { Request, Response } from 'express'
import registerUserService from '../services/user/registerUser.service'
import displayUserService from '../services/user/displayUser.service'
import toggleDisplayService from '../services/user/toggleDisplay.service'
import editUserService from '../services/user/editUser.service'
import deleteUserService from '../services/user/deleteUser.service'
import { iUserRequest } from '../interfaces'

export async function registerUserController(req: Request, res: Response): Promise<Response> {
    const { name, email, secondaryEmail, phone, secondaryPhone, password, sharing } = req.body as iUserRequest

    const user = await registerUserService({
        name,
        email,
        secondaryEmail,
        phone,
        secondaryPhone,
        sharing,
        password
    })

    return res.status(201).json(user)
}

export async function displayUserController(req: Request, res: Response): Promise<Response> {
    const { id } = req.body.user as { id: string }
    const user = await displayUserService(id)
    return res.status(200).json(user)
}

export async function toggleDisplayController(req: Request, res: Response): Promise<Response> {
    const { id } = req.body.user as { id: string }
    const user = await toggleDisplayService(id)
    return res.status(200).json(user)
}

export async function editUserController(req: Request, res: Response): Promise<Response> {
    const { id } = req.body.user as { id: string }
    const data = req.body as iUserRequest
    const user = await editUserService(id, data)
    return res.status(200).json(user)
}

export async function deleteUserController(req: Request, res: Response): Promise<Response> {
    const { id } = req.body.user as { id: string }
    await deleteUserService(id)
    return res.status(204).send()
}

export async function displayProfileController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params as { id: string }
    const profile = await displayUserService(id)
    return res.status(200).json(profile)
}