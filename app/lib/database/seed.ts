/* eslint-disable no-console */
import { db } from '.'
import { tickets } from './schema'

async function seed() {
  console.log('🌱 Seeding database...')

  /* Clear existing ticket records */
  await db.delete(tickets)

  const records = []

  for (let i = 0; i < 100; i++) {
    records.push({
      number: i + 1,
      status: 'available',
    })
  }

  await db.insert(tickets).values(records)
  console.log('🌱 Database seeded successfully.')
}

seed().catch((err) => {
  console.error('❌ Error seeding database:', err)
})
