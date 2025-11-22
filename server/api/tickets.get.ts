import { db } from '~/lib/database'
import { tickets } from '~/lib/database/schema'

export default defineEventHandler(async () => {
  const records = await db.select({
    id: tickets.id,
    status: tickets.status,
    number: tickets.number,
  }).from(tickets)

  return records
})
