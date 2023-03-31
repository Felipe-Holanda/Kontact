import app from './app'
import connect from './data-source'
import 'dotenv/config'


(
    async () => {
        try {
            await connect()
            app.listen(process.env.PORT, () => {
                console.log('[INFO]: Servidor iniciado na porta', process.env.PORT)
            })
        } catch (error) {
            console.log('[ERROR]:', error)
        }
    }
)()