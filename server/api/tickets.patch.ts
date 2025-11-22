import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { db } from '~/lib/database'
import { tickets } from '~/lib/database/schema'

const ticketSchema = z.object({
  ownerName: z.string().min(3),
  number: z.number(),
})

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, body => ticketSchema.safeParse(body))

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid data',
      data: result.error.issues,
    })
  }

  const records = await db.select().from(tickets).where(eq(tickets.number, result.data.number))

  if (records.length === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Ticket not found',
    })
  }

  const [ticket] = records

  if (ticket.status !== 'available') {
    throw createError({
      statusCode: 409,
      statusMessage: 'The ticket is already reserved',
    })
  }

  const response = await db.update(tickets)
    .set({ ownerName: result.data.ownerName, status: 'pending' })
    .where(eq(tickets.id, ticket.id))
    .returning({ updatedId: tickets.id })

  return { ticketId: response[0].updatedId }
})
