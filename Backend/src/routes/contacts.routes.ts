import { Router } from 'express'

//Serialziers
import idVerify from '../middlewares/serializers/idVerify.serializer'
import shapeVerify from '../middlewares/serializers/shapeVerify.serializer'
import { registerSchema, updateSchema } from '../schemas/contact.schema'

//Middlewares
import checkToken from '../middlewares/users/checkToken.middleware'
import verifyMail from '../middlewares/contacts/verifyMail.middleware'
import verifyNumber from '../middlewares/contacts/verifyNumber.middleware'
import checkPrivileges from '../middlewares/contacts/checkPrivileges.middleware'

//Controllers
import { createContact, listContacts, updateContact, deleteContact } from '../controllers/contacts.controllers'
const contactsRouter = Router()

contactsRouter.get('', checkToken, listContacts)
contactsRouter.post('', shapeVerify(registerSchema), checkToken, createContact)
contactsRouter.patch('/:id', shapeVerify(updateSchema), checkToken, idVerify, checkPrivileges, updateContact)
contactsRouter.delete('/:id', checkToken, idVerify, checkPrivileges, deleteContact)


export default contactsRouter