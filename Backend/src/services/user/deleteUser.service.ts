import User from '../../models/user.model'

export default async function deleteUserService(id: string): Promise<void> {
    await User.findByIdAndDelete(id)
    return;
}