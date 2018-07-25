import { admin, auth, db } from '../config/firebase'
import coords from './coords'

const drivers = coords.map((pos, i) => ({ position: pos, id: i }));

function populateDrivers() {
  db.ref('drivers').remove()

  drivers.forEach(driver => {
    db.ref('drivers').child(driver.id).update(driver)
  })
}

function randomPosition(lat, lon) {
  const operations = [
    '+ 0.00005',
    '- 0.00005',
    '+ 0.00015',
    '- 0.00015',
    '+ 0.00002',
    '- 0.00003',
  ]
  const j = Math.random() * operations.length | 0

  return {
    latitude: eval(`${lat} ${operations[j]}`),
    longitude: eval(`${lon} ${operations[j]}`),
  }
}

function updateRandomDriver() {
  const i = Math.random() * drivers.length | 0
  const updatedDriver = drivers[i]
  const { position: { latitude, longitude } } = updatedDriver

  updatedDriver.position = randomPosition(latitude, longitude)

  db.ref('drivers').child(drivers[i].id).update(updatedDriver)
}

export function main() {
  populateDrivers()

  setInterval(() => {
    updateRandomDriver()
  }, 5000)
}