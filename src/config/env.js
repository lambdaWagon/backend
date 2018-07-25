import dotenv from 'dotenv'
import admin from 'firebase-admin'

let serviceAccount

try {
  serviceAccount = admin.credential.cert(require('../../serviceAccount.json'))
} catch (e) {
  if (e.code === 'MODULE_NOT_FOUND') console.log('⚠️  serviceAccount.json is missing')
  else console.log(e)
}

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
    credential: serviceAccount,
  }
}
