import { createId } from '@paralleldrive/cuid2'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const tickets = sqliteTable('tickets', {
	id: text('id').primaryKey().$defaultFn(() => createId()),
	number: integer('number').notNull().unique(),
	status: text('status').default('available'),
	ownerName: text('owner_name'),
})
