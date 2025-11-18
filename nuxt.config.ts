// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/fonts', 'nuxt-phosphor-icons'],
	devtools: { enabled: true },
	css: ['~/assets/styles/global.scss'],
	compatibilityDate: '2025-07-15',
	eslint: {
		config: {
			stylistic: {
				indent: 2,
				semi: false,
				quotes: 'single',
			},
		},
	},
	fonts: {
		defaults: {
			weights: [400, 500, 600],
			styles: ['normal'],
		},
	},
})
