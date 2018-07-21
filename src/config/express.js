import express from 'express'
import helmet from 'helmet'

const app = express()

app.use(helmet())
app.use(express.json())
app.use('/', require('./routes'))

export default app