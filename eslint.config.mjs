// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.vue', '**/*.js', '**/*.ts'],
    rules: {
      'no-console': 'warn',
      'no-alert': 'warn',
    },
  },
)
