import express from 'express'
import 'express-async-errors'
import errorHandler from './errors/ErrorHandler.middleware'
//Routers
import userRouter from './routes/user.routes'
import loginRouter from './routes/login.routes'
import contactsRouter from './routes/contacts.routes'

const app = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('/login', loginRouter)
app.use('/contacts', contactsRouter)

app.use(errorHandler)
export default app