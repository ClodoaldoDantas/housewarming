import { RAFFLE_NUMBER_PRICE_IN_CENTS } from '~/config/constants'

export default function getOrderPriceFormatted() {
	const priceFormatted = (RAFFLE_NUMBER_PRICE_IN_CENTS / 100).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})

	return priceFormatted
}
