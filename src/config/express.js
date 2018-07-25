import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

app.use(helmet())
app.use(express.json())
app.use(cors())
app.use('/', require('./routes'))

export default app