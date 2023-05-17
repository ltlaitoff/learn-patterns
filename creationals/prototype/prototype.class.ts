abstract class Shape {
	x: number
	y: number
	color: string

	constructor()
	constructor(x: Shape)
	constructor(shape?: Shape) {
		if (shape && shape instanceof Shape) {
			this.x = shape.x
			this.y = shape.y
			this.color = shape.color
			return
		}

		this.x = 0
		this.y = 0
		this.color = '#fff'
	}

	abstract clone(): Shape
}

class Rectangle extends Shape {
	width: number
	height: number

	constructor()
	constructor(source: Rectangle)
	constructor(source?: Rectangle) {
		if (source) {
			super(source)
		} else {
			super()
		}

		if (source && source instanceof Rectangle) {
			this.width = source.width
			this.height = source.height
			return
		}

		this.width = 0
		this.height = 0
	}

	clone(): Shape {
		return new Rectangle(this)
	}
}

class Circle extends Shape {
	radius: number

	constructor()
	constructor(source: Circle)
	constructor(source?: Circle) {
		if (source) {
			super(source)
		} else {
			super()
		}

		if (source && source instanceof Circle) {
			this.radius = source.radius

			return
		}

		this.radius = 0
	}

	clone(): Shape {
		return new Circle(this)
	}
}

function main() {
	const shapes: Shape[] = []

	const circle: Circle = new Circle()
	circle.x = 10
	circle.y = 10
	circle.radius = 20
	shapes.push(circle)

	const anotherCircle = circle.clone()
	shapes.push(anotherCircle)

	const rectangle: Rectangle = new Rectangle()
	rectangle.width = 10
	rectangle.height = 20

	shapes.push(rectangle)

	const shapesCopy: Shape[] = []

	shapes.forEach(shape => {
		shapesCopy.push(shape.clone())
	})

	console.log('shapes:', shapes)
	console.log('shapesCopy:', shapesCopy)
}

main()
