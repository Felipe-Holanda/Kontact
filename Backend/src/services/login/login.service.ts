import User from '../../models/user.model'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export default async function loginService(data): Promise<string> {

    const { email } = data;

    const user = await User.findOne({ email })

    const id = user._id.toString()

    const token = jwt.sign({ id: id }, process.env.SECRET_KEY, {
        expiresIn: 86400
    })

    return token

}