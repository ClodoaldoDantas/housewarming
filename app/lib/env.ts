import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
  TURSO_CONNECTION_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
  PIX_KEY: z.string(),
})

export const env = envSchema.parse(process.env)
