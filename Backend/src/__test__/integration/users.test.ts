import request from 'supertest'
import connect from '../../data-source'
import app from '../../app'
import { workingUser, workingUser2, invalidUser, conflictingMailUser, conflictingPhoneUser } from '../mocks/user.mocks'
import User from '../../models/user.model'

beforeAll(async () => {
    await connect()
})

describe('POST /users', () => {

    afterAll(async () => {
        await User.deleteMany({})
    })

    it('Deve criar um usuário corretamente', async () => {
        const response = await request(app).post('/users').send(workingUser)
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('_id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('phone')
        expect(response.body).not.toHaveProperty('password')
        expect(response.body).toHaveProperty('createdAt')
        expect(response.body).toHaveProperty('updatedAt')
    })

    it('Não deve criar um usuário com dados inválidos', async () => {
        const response = await request(app).post('/users').send(invalidUser)
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve criar um usuário com e-mail já existente', async () => {
        const response = await request(app).post('/users').send(conflictingMailUser)
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve criar um usuário com telefone já existente', async () => {
        const response = await request(app).post('/users').send(conflictingPhoneUser)
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

})

describe('GET /users', () => {

    afterAll(async () => {
        await User.deleteMany({})
    })

    it('Deve retornar o perfil do usuário', async () => {
        await request(app).post('/users').send(workingUser)
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const response = await request(app).get('/users').set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('_id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('phone')
        expect(response.body).not.toHaveProperty('password')
        expect(response.body).toHaveProperty('createdAt')
        expect(response.body).toHaveProperty('updatedAt')
    })

    it('Não deve retornar o perfil do usuário sem token', async () => {
        const response = await request(app).get('/users')
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve retornar o perfil do usuário com token inválido', async () => {
        const response = await request(app).get('/users').set('Authorization', `Bearer ${workingUser.password}`)
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

})

describe('GET /users/:id', () => {

    afterAll(async () => {
        await User.deleteMany({})
    })

    it('Deve retornar o perfil do usuário', async () => {
        const requested = await request(app).post('/users').send({ ...workingUser, sharing: true })
        const response = await request(app).get(`/users/${requested.body._id}`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('_id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('phone')
        expect(response.body).not.toHaveProperty('password')
        expect(response.body).toHaveProperty('createdAt')
        expect(response.body).toHaveProperty('updatedAt')
    })

    it('Não deve retornar o perfil do usuário com id inválido', async () => {
        const response = await request(app).get('/users/123')
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve retornar o perfil do usuário com id inexistente', async () => {
        const response = await request(app).get('/users/5f5a1a5b5a5b5a5b5a5b5a5b')
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve retornar o perfil do usuário com id de usuário que não compartilha', async () => {
        const { body: { _id } } = await request(app).post('/users').send(workingUser2)
        const response = await request(app).get(`/users/${_id}`)
        expect(response.status).toBe(403)
        expect(response.body).toHaveProperty('message')
    })

})

describe('PUT /users', () => {

    afterAll(async () => {
        await User.deleteMany({})
    })

    it('Deve atualizar o display do usuário', async () => {
        await request(app).post('/users').send(workingUser)
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const response = await request(app).put('/users').set('Authorization', `Bearer ${token}`).send();
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('_id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('phone')
        expect(response.body).not.toHaveProperty('password')
        expect(response.body).toHaveProperty('createdAt')
        expect(response.body).toHaveProperty('updatedAt')
        expect(response.body.sharing).toBe(true)
    })

    it('Não deve atualizar o display do usuário sem token', async () => {
        const response = await request(app).put('/users').send();
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve atualizar o display do usuário com token inválido', async () => {
        const response = await request(app).put('/users').set('Authorization', `Bearer ${workingUser.password}`).send();
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })
})

describe('PATCH /users', () => {


    afterAll(async () => {
        await User.deleteMany({})
    })

    it('Deve atualizar o perfil do usuário', async () => {
        const user = await request(app).post('/users').send(workingUser)
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const response = await request(app).patch('/users').set('Authorization', `Bearer ${token}`).send({ name: 'Testeando' })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('_id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('phone')
        expect(response.body).not.toHaveProperty('password')
        expect(response.body).toHaveProperty('createdAt')
        expect(response.body).toHaveProperty('updatedAt')
        expect(response.body.name).toBe('Testeando')
        expect(response.body.updatedAt).not.toBe(user.body.updatedAt)
    })

    it('Não deve atualizar o perfil do usuário sem token', async () => {
        const response = await request(app).patch('/users').send({ name: 'Testeando' })
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve atualizar o perfil do usuário com token inválido', async () => {
        const response = await request(app).patch('/users').set('Authorization', `Bearer ${workingUser.password}`).send({ name: 'Testeando' })
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve atualizar o perfil do usuário com dados inválidos', async () => {
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const response = await request(app).patch('/users').set('Authorization', `Bearer ${token}`).send({ email: 123 })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

})

describe('DELETE /users', () => {

    afterAll(async () => {
        await User.deleteMany({})
    })

    it('Deve deletar o usuário', async () => {
        await request(app).post('/users').send(workingUser)
        const { body: { token } } = await request(app).post('/login').send({ email: workingUser.email, password: workingUser.password })
        const response = await request(app).delete('/users').set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(204)
    })

    it('Não deve deletar o usuário sem token', async () => {
        const response = await request(app).delete('/users')
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve deletar o usuário com token inválido', async () => {
        const response = await request(app).delete('/users').set('Authorization', `Bearer ${workingUser.password}`)
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })

})