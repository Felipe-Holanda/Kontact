import { Router } from 'express'
import loginController from '../controllers/login.controller'
import { loginSchema } from '../schemas/login.schema'
import shapeVerify from '../middlewares/serializers/shapeVerify.serializer'
import checkLogin from '../middlewares/login/checkLogin.middleware'
const loginRouter = Router()

loginRouter.post('', shapeVerify(loginSchema), checkLogin, loginController)

export default loginRouter