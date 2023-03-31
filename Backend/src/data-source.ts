import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.set('strictQuery', true)

const connect = async () => {

    let URL = process.env.NODE_ENV === 'test' ? process.env.MONGO_URL_TEST : process.env.MONGO_URL

    try {
        await mongoose.connect(URL)
        if (process.env.NODE_ENV !== 'test') console.log('[INFO]: Conectado ao banco de dados!')
    } catch (error) {
        console.log('[ERRO]: Não foi possível conectar ao banco de dados, o servidor não será iniciado.')
    }
}

export default connect