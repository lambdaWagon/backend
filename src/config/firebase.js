import admin from 'firebase-admin'

import env from './env'

export const firebase = admin.initializeApp(env.firebase)
export const auth = admin.auth()
export const db = admin.database()
