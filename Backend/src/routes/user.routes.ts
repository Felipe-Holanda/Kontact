import { Router } from 'express'
//Serialziers
import shapeVerify from '../middlewares/serializers/shapeVerify.serializer'
import idVerify from '../middlewares/serializers/idVerify.serializer'
import { registerSchema, updateSchema } from '../schemas/user.schema'

//Middlewares
import checkUniquePhone from '../middlewares/users/checkPhone.middleware'
import checkUniqueMail from '../middlewares/users/uniqueMail.middleware'
import checkToken from '../middlewares/users/checkToken.middleware'
import checkIsOpenMiddleware from '../middlewares/users/checkIsOpen.middleware'

//Controllers
import {
    registerUserController, displayUserController,
    toggleDisplayController, editUserController,
    deleteUserController, displayProfileController
} from '../controllers/users.controllers'

const userRouter = Router()

userRouter.post('', shapeVerify(registerSchema), checkUniqueMail, checkUniquePhone, registerUserController)
userRouter.get('', checkToken, displayUserController)
userRouter.get('/:id', idVerify, checkIsOpenMiddleware, displayProfileController)
userRouter.put('', checkToken, toggleDisplayController)
userRouter.patch('', shapeVerify(updateSchema), checkToken, editUserController)
userRouter.delete('', checkToken, deleteUserController)

export default userRouter