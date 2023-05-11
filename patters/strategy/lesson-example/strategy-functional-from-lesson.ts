const priceStrategies = {
	'pre-sale': preSalePrice,
	promotion: promotionPrice,
	default: defaultPrice
}

function preSalePrice(originalPrice: number) {
	return originalPrice * 0.8
}

function promotionPrice(originalPrice: number) {
	if (originalPrice > 1000) {
		return originalPrice * 0.7
	}

	return originalPrice - 20
}

function defaultPrice(originalPrice: number) {
	return originalPrice
}

function getPrice(originalPrice: number, status: keyof typeof priceStrategies) {
	return priceStrategies[status](originalPrice)
}

console.log('pre-sale: ', getPrice(1000, 'pre-sale'))
console.log('promotion: ', getPrice(1500, 'promotion'))
console.log('default: ', getPrice(500, 'default'))
