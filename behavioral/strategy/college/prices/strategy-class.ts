interface StrategyTransformPrice {
	getTransformed: (originalPrice: number) => number
}

class PreSalePriceStrategy implements StrategyTransformPrice {
	getTransformed(originalPrice: number): number {
		return originalPrice * 0.8
	}
}

class PromotionPriceStrategy implements StrategyTransformPrice {
	getTransformed(originalPrice: number): number {
		if (originalPrice > 1000) {
			return originalPrice * 0.7
		}

		return originalPrice - 20
	}
}

class DefaultPriceStrategy implements StrategyTransformPrice {
	getTransformed(originalPrice: number): number {
		return originalPrice
	}
}

class Price {
	private strategy!: StrategyTransformPrice
	private price: number

	constructor(originalPrice: number) {
		this.price = originalPrice
	}

	setStrategy(strategy: StrategyTransformPrice) {
		this.strategy = strategy
	}

	getPrice() {
		return this.strategy.getTransformed(this.price)
	}
}

function main() {
	const firstProductPrice = new Price(1000)

	firstProductPrice.setStrategy(new PreSalePriceStrategy())
	console.log('pre-sale: ', firstProductPrice.getPrice())

	firstProductPrice.setStrategy(new PromotionPriceStrategy())
	console.log('promotion: ', firstProductPrice.getPrice())

	firstProductPrice.setStrategy(new DefaultPriceStrategy())
	console.log('default: ', firstProductPrice.getPrice())
}

main()
