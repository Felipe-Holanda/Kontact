import request from 'supertest'
import connect from '../../data-source'
import app from '../../app'
import User from '../../models/user.model'
import { loginMock, registerMock } from '../mocks/login.mocks'

describe('POST /login', () => {

    beforeAll(async () => {
        await connect()
    })

    afterAll(async () => {
        await User.deleteMany({})
    })

    it('Deve fazer login corretamente', async () => {
        await request(app).post('/users').send(registerMock)
        const response = await request(app).post('/login').send(loginMock)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('token')
    })

    it('O Token deve ser válido', async () => {
        const response = await request(app).post('/login').send(loginMock)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('token')
        expect(response.body.token).not.toBe(null)
        expect(response.body.token).not.toBe(undefined)
        expect(response.body.token).not.toBe('')
    })

    it('Não deve fazer login sem dados', async () => {
        const response = await request(app).post('/login').send({})
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve fazer login com dados inválidos', async () => {
        const response = await request(app).post('/login').send({ email: 123, password: 123 })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    it('Nào deve fazer login com dados não incorretos', async () => {
        const response = await request(app).post('/login').send({ email: 'invalid@mail.com', password: 'invalid' })
        expect(response.status).toBe(403)
        expect(response.body).toHaveProperty('message')
    })

    it('Não deve fazer login com dados não cadastrados', async () => {
        const response = await request(app).post('/login').send({ email: 'johndoe@mail.com', password: 'asasd123' })
        expect(response.status).toBe(403)
        expect(response.body).toHaveProperty('message')
    })

})