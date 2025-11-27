import { z } from 'zod'

const bodySchema = z.object({
  password: z.string().min(8),
})

export default defineEventHandler(async (event) => {
  const { password } = await readValidatedBody(event, bodySchema.parse)
  const config = useRuntimeConfig()

  if (password !== config.authPassword) {
    throw createError({
      statusCode: 401,
      message: 'Bad credentials',
    })
  }

  await setUserSession(event, { user: 'admin' })

  return {}
})
