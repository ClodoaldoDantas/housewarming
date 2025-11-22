import 'dotenv/config'

import { defineConfig } from 'drizzle-kit'
import { env } from './app/lib/env'

export default defineConfig({
	schema: './app/lib/database/schema.ts',
	out: './app/lib/database/migrations',
	dialect: 'turso',
	dbCredentials: {
		url: env.TURSO_CONNECTION_URL,
		authToken: env.TURSO_AUTH_TOKEN,
	},
})
