import User from "../../models/user.model";
import { iUser } from "../../interfaces";

export default async function displayUserService(id: string): Promise<iUser> {
    const user = await User.findById({ _id: id }).select('-password');

    return user;
}