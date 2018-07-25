import { admin, auth, db, geoFire } from '../config/firebase'
import coords from './coords'

async function populateDrivers() {
  try {
    const obj = coords.reduce((a, p, i) => ({ ...a,
      [`driver:${i}`]: [p.latitude, p.longitude]
    }), {})
    await geoFire.set(obj)
  } catch (e) { console.log(e) }
}

async function queryDrivers() {
  const query = await geoFire.query({
    center: [35.045630, -85.309680],
    radius: 10
  })

  query.on('key_entered', (key, location, distance) => {
    console.log(`${key} entered query at ${location} ${distance} km from center`)
  })

  query.on('key_moved', (key, location, distance) => {
    console.log(`${key} moved within query to ${location} ${distance} km from center`)
  })

  query.on('key_exited', (key, location, distance) => {
    console.log(`${key} exited query to ${location} ${distance} km from center`)
  })
}

function randomPosition(pos) {
  const operations = [
    '+ 0.00005',
    '- 0.00005',
    '+ 0.00015',
    '- 0.00015',
    '+ 0.00002',
    '- 0.00003',
  ]
  const j = Math.random() * operations.length | 0

  return [
    eval(`${pos[0]} ${operations[j]}`),
    eval(`${pos[1]} ${operations[j]}`)
  ]
}

async function updateRandomDriver() {
  try {
    const i = Math.random() * coords.length | 0
    const driver = await geoFire.get(`driver:${i}`)
    const newPos = randomPosition(driver)
    await geoFire.set({ [`driver:${i}`]: newPos })
  } catch (e) { console.log(e) }
}

export function main() {
  queryDrivers()
  // populateDrivers()

  setInterval(() => {
    updateRandomDriver()
  }, 5000)
}