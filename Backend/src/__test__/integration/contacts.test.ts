import app from '../../app'
import request from 'supertest'
import User from '../../models/user.model'
import Contact from '../../models/contacts.model'
import { workingContact, workingContact_2, conflictContact, invalidContact } from '../mocks/contacts.mocks'
import { workingUser } from '../mocks/user.mocks'
import connect from '../../data-source'

beforeAll(async () => {
    await connect()
    await request(app).post('/users').send(workingUser)
})

afterAll(async () => {
    await User.deleteMany({})
    await Contact.deleteMany({})
})

describe('POST /contacts', () => {

    it('Deve criar um contato', async () => {
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const response = await request(app).post('/contacts').set('Authorization', `Bearer ${token}`).send(workingContact)
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('_id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('phone')
        expect(response.body).toHaveProperty('createdAt')
        expect(response.body).toHaveProperty('updatedAt')
    })

    it('Não deve criar um contato sem estar autenticado', async () => {
        const response = await request(app).post('/contacts').send(workingContact)
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve criar um contato com dados inválidos', async () => {
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const response = await request(app).post('/contacts').set('Authorization', `Bearer ${token}`).send(invalidContact)
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

})

describe('GET /contacts', () => {

    it('Deve listar os contatos', async () => {
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        await request(app).post('/contacts').set('Authorization', `Bearer ${token}`).send(workingContact)
        await request(app).post('/contacts').set('Authorization', `Bearer ${token}`).send(workingContact_2)
        const response = await request(app).get('/contacts').set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(200)
    })

    it('Não deve listar os contatos sem estar autenticado', async () => {
        const response = await request(app).get('/contacts')
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve listar os contatos de outro usuário', async () => {

        const privUser = {
            name: 'Private User',
            email: 'private@mail.com',
            phone: '63999141414',
            password: '123456'
        }
        await request(app).post('/users').send(privUser)
        const { body: { token } } = await request(app).post('/login').send({ email: privUser.email, password: privUser.password })
        const response = await request(app).get('/contacts').set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveLength(0)
    })

    it('Não deve listar os contatos com token inválido', async () => {
        const response = await request(app).get('/contacts').set('Authorization', `Bearer ${workingUser.password}`)
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

})

describe('PATCH /contacts/:id', () => {
    it('Deve atualizar um contato', async () => {
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const { body: { _id } } = await request(app).post('/contacts').set('Authorization', `Bearer ${token}`).send(workingContact)
        const response = await request(app).patch(`/contacts/${_id}`).set('Authorization', `Bearer ${token}`).send({ name: 'Testelar' })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('_id')
        expect(response.body).toHaveProperty('name')
        expect(response.body.name).toBe('Testelar')
    })

    it('Não deve atualizar um contato sem estar autenticado', async () => {
        const { body: { _id } } = await request(app).post('/contacts').send(workingContact)
        const response = await request(app).patch(`/contacts/${_id}`).send({ name: 'Testelar' })
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve atualizar um contato com dados inválidos', async () => {
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const { body: { _id } } = await request(app).post('/contacts').set('Authorization', `Bearer ${token}`).send(workingContact)
        const response = await request(app).patch(`/contacts/${_id}`).set('Authorization', `Bearer ${token}`).send({ email: 123 })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

})

describe('DELETE /contacts/:id', () => {

    it('Deve deletar um contato', async () => {
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const { body: { _id } } = await request(app).post('/contacts').set('Authorization', `Bearer ${token}`).send(workingContact)
        const response = await request(app).delete(`/contacts/${_id}`).set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(204)
    })

    it('Não deve deletar um contato sem estar autenticado', async () => {
        const { body: { _id } } = await request(app).post('/contacts').send(workingContact)
        const response = await request(app).delete(`/contacts/${_id}`)
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve deletar um contato de outro usuário', async () => {
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const { body: { _id } } = await request(app).post('/contacts').set('Authorization', `Bearer ${token}`).send(workingContact)
        const response = await request(app).delete(`/contacts/${_id}`)
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve deletar um contato com token inválido', async () => {
        const { body: { _id } } = await request(app).post('/contacts').send(workingContact)
        const response = await request(app).delete(`/contacts/${_id}`).set('Authorization', `Bearer ${workingUser.password}`)
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

})