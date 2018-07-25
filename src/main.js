import app from './config/express'
import env from './config/env'
import { main } from './controllers/drivers'

app.listen(env.port, () => console.log(`🤖 listening: http://localhost:${env.port}/ in ${app.get('env')} mode`))

main()