import User from '../../models/user.model'
import { hash } from 'bcryptjs'
import { iUser, iUserRequest } from '../../interfaces'

export default async function editUserService(id: string, data: iUserRequest): Promise<iUserRequest> {
    const user = await User.findById(id)

    if (data.name) user.name = data.name
    if (data.email) user.email = data.email
    if (data.secondaryEmail) user.secondaryEmail = data.secondaryEmail
    if (data.phone) user.phone = data.phone
    if (data.secondaryPhone) user.secondaryPhone = data.secondaryPhone
    if (data.password) user.password = await hash(data.password, 8)
    user.updatedAt = new Date()


    const response = (await user.save()).toObject()

    delete response.password

    return response;
}