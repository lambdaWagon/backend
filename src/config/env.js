import dotenv from 'dotenv'

dotenv.config()

export default {
  db: process.env.DB_HOST || 'mongodb://localhost:27017/chattywagon_test',
  port: process.env.PORT || 8080
}