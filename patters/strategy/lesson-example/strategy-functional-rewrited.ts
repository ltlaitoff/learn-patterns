type StrategyTransformPrice = (originalPrice: number) => number

const preSalePriceStrategy: StrategyTransformPrice = (
	originalPrice: number
) => {
	return originalPrice * 0.8
}

const promotionPriceStrategy: StrategyTransformPrice = (
	originalPrice: number
) => {
	if (originalPrice > 1000) {
		return originalPrice * 0.7
	}

	return originalPrice - 20
}

const defaultPriceStrategy: StrategyTransformPrice = (
	originalPrice: number
) => {
	return originalPrice
}

type GetPriceStatuses = 'pre-sale' | 'promotion' | 'default'

function getPrice(originalPrice: number, status: GetPriceStatuses) {
	switch (status) {
		case 'pre-sale':
			return preSalePriceStrategy(originalPrice)
		case 'promotion':
			return promotionPriceStrategy(originalPrice)
		case 'default':
			return defaultPriceStrategy(originalPrice)
		default:
			throw new Error(`Unknown status! Status: '${status}'`)
	}
}

function main() {
	console.log('pre-sale: ', getPrice(1000, 'pre-sale'))
	console.log('promotion: ', getPrice(1500, 'promotion'))
	console.log('default: ', getPrice(500, 'default'))
}

main()
