interface StrategyNumbers {
	execute: (number: number) => string[]
}

class DefaultStrategy implements StrategyNumbers {
	execute(number: number): string[] {
		return Array.from({ length: number }, (_, index) => String(index + 1))
	}
}

class FizzBuzzStrategy implements StrategyNumbers {
	execute(number: number): string[] {
		return Array.from({ length: number }, (_, index) => {
			index++

			if (index % 15 === 0) return 'FizzBuzz'
			if (index % 5 === 0) return 'Buzz'
			if (index % 3 === 0) return 'Fizz'

			return String(index)
		})
	}
}

class Numbers {
	private strategy!: StrategyNumbers
	private number: number

	constructor(number: number) {
		this.number = number
	}

	setStrategy(strategy: StrategyNumbers) {
		this.strategy = strategy
	}

	getNumbers() {
		return this.strategy.execute(this.number)
	}
}

function main() {
	const numbers = new Numbers(50)

	numbers.setStrategy(new DefaultStrategy())
	console.log('DefaultStrategy: ', JSON.stringify(numbers.getNumbers()))

	numbers.setStrategy(new FizzBuzzStrategy())
	console.log('FizzBuzzStrategy: ', JSON.stringify(numbers.getNumbers()))
}

main()
