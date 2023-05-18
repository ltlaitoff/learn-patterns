class RoundHole {
	private radius: number

	constructor(radius: number) {
		this.radius = radius
	}

	getRadius() {
		return this.radius
	}

	fits(peg: RoundPeg) {
		return this.radius >= peg.getRadius()
	}
}

class RoundPeg {
	private radius: number

	constructor(radius: number) {
		this.radius = radius
	}

	getRadius() {
		return this.radius
	}
}

class SquarePeg {
	private width: number

	constructor(width: number) {
		this.width = width
	}

	getWidth() {
		return this.width
	}
}

class SquarePegAdapter extends RoundPeg {
	private peg: SquarePeg

	constructor(peg: SquarePeg) {
		super(0)

		this.peg = peg
	}

	getRadius(): number {
		return this.getRadiusByValue(this.peg.getWidth())
	}

	private getRadiusByValue(value: number): number {
		return (value * Math.sqrt(2)) / 2
	}
}

function main() {
	const holeFive = new RoundHole(5)
	const pegRoundFive = new RoundPeg(5)
	const pegRoundSix = new RoundPeg(6)

	console.log('holeFive with pegRoundFive:', holeFive.fits(pegRoundFive))
	console.log('holeFive with pegRoundSix:', holeFive.fits(pegRoundSix))

	const pegSquareFive = new SquarePeg(5)
	const pegSquareFiveWithAdapter = new SquarePegAdapter(pegSquareFive)

	console.log(
		'holeFive with pegSquareFiveWithAdapter:',
		holeFive.fits(pegSquareFiveWithAdapter)
	)

	const pegSquareSix = new SquarePeg(6)
	const pegSquareSixWithAdapter = new SquarePegAdapter(pegSquareSix)

	console.log(
		'holeFive with pegSquareSixWithAdapter:',
		holeFive.fits(pegSquareSixWithAdapter)
	)
}

main()
