import admin from 'firebase-admin'
import GeoFire from 'geofire'

import env from './env'

export const firebase = admin.initializeApp(env.firebase)
export const auth = admin.auth()
export const db = admin.database()
export const geoFire = new GeoFire(db.ref('driverLocations'))