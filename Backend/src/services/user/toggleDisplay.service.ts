import User from "../../models/user.model";
import { iUserRequest } from "../../interfaces";

export default async function toggleDisplayService(id: string): Promise<iUserRequest> {
    const user = await User.findById(id)

    user.sharing = !user.sharing

    const response = (await user.save()).toObject()

    delete response.password

    return response;
}