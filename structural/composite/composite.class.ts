interface Graphic {
	move(x: number, y: number): void
	draw(): void
}

class Dot implements Graphic {
	protected x: number
	protected y: number

	constructor(x: number, y: number) {
		this.x = x
		this.y = y
	}

	move(x: number, y: number) {
		console.log(`Move dot or cicle to x = ${x}, y = ${y}`)

		this.x = x
		this.y = y
	}

	draw(): void {
		console.log(`Draw dot x = ${this.x}, y = ${this.y}`)
	}
}

class Circle extends Dot {
	private radius: number

	constructor(x: number, y: number, radius: number) {
		super(x, y)
		this.radius = radius
	}

	draw(): void {
		console.log(`Draw circle x = ${this.x}, y = ${this.y}, r = ${this.radius}`)
	}
}

class CompoundGraphic implements Graphic {
	private children: Graphic[] = []

	add(child: Graphic) {
		this.children.push(child)
	}

	remove(child: Graphic) {
		this.children = this.children.filter(innerChild => {
			return innerChild !== child
		})
	}

	move(x: number, y: number) {
		this.children.forEach(item => {
			item.move(x, y)
		})
	}

	draw(): void {
		this.children.forEach(item => {
			item.draw()
		})
	}
}

function main() {
	const all = new CompoundGraphic()

	all.add(new Dot(1, 2))
	all.add(new Circle(5, 3, 10))

	all.draw()

	all.move(0, 0)
	all.draw()
}

main()
