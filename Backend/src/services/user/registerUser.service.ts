import User from '../../models/user.model'
import { iUserRequest, iUser } from '../../interfaces'
import { hash } from 'bcryptjs'

export default async function registerUserService(data: iUserRequest): Promise<iUser> {
    const { name, email, secondaryEmail, phone, secondaryPhone, sharing, password } = data

    const hashedPassword = await hash(password, 8)

    const fields = {
        name,
        email,
        secondaryEmail: secondaryEmail || null,
        phone,
        secondaryPhone: secondaryPhone || null,
        sharing,
        password: hashedPassword,
    }

    const user = await User.create(fields)

    const response: iUser = user.toObject()

    delete response.password

    return response
}