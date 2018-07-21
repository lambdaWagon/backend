import dotenv from 'dotenv'
import admin from 'firebase-admin'

import serviceAccount from '../../serviceAccount.json'

dotenv.config()

export default {
  db: process.env.DB_HOST || 'mongodb://localhost:27017/chattywagon_test',
  port: process.env.PORT || 8080,
  firebase: {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    credential: admin.credential.cert(serviceAccount),
  }
}