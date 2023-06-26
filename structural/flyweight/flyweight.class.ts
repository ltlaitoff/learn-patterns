class CustomCanvas {
	private result: string[] = []

	addCall(type: string) {
		this.result.push(type)
	}

	getResult() {
		return this.result.join('\n')
	}
}

class Forest {
	public trees: Tree[] = []

	plantTree(
		x: number,
		y: number,
		name: string,
		color: string,
		texture: string
	): Tree {
		const treeType = TreeFactory.getTreeType(name, color, texture)

		const newTree = new Tree(x, y, treeType)
		this.trees.push(newTree)

		return newTree
	}

	draw(canvas: CustomCanvas) {
		this.trees.forEach(tree => {
			canvas.addCall(`Forest draw call tree with x = ${tree.x}, y = ${tree.y}`)
			tree.draw(canvas)
		})
	}
}

class Tree {
	public x: number
	public y: number
	public type: TreeType

	constructor(x: number, y: number, type: TreeType) {
		this.x = x
		this.y = y
		this.type = type
	}

	draw(canvas: CustomCanvas) {
		canvas.addCall(`Tree draw, x = ${this.x}, y = ${this.y}`)
		this.type.draw(canvas, this.x, this.y)
	}
}

class TreeFactory {
	private static treeTypes: TreeType[] = []

	static getTreeType(name: string, color: string, texture: string): TreeType {
		const findedTree = this.treeTypes.find(item =>
			item.checkOnType(name, color, texture)
		)

		if (findedTree === undefined) {
			const newTree = new TreeType(name, color, texture)

			this.treeTypes.push(newTree)

			return newTree
		}

		return findedTree
	}
}

class TreeType {
	private name: string
	private color: string
	private texture: string

	constructor(name: string, color: string, texture: string) {
		this.name = name
		this.color = color
		this.texture = texture
	}

	draw(canvas: CustomCanvas, x: number, y: number) {
		canvas.addCall(`TreeType draw, x = ${x}, y = ${y}`)
	}

	checkOnType(name: string, color: string, texture: string) {
		return (
			this.name === name || this.color === color || this.texture === texture
		)
	}
}

function main() {
	const firstCanvas = new CustomCanvas()

	const forest = new Forest()

	forest.plantTree(1, 2, 'TestTree1', 'Red', 'Wood1')
	forest.plantTree(7, 6, 'TestTree1', 'Red', 'Wood1')
	forest.plantTree(8, 9, 'TestTree1', 'Red', 'Wood1')
	forest.plantTree(19, 2, 'TestTree1', 'Red', 'Wood1')

	forest.plantTree(12, 9, 'TestTree2', 'Red', 'Wood2')
	forest.plantTree(36, 45, 'TestTree2', 'Red', 'Wood2')

	forest.draw(firstCanvas)

	console.log(firstCanvas.getResult())
}

main()
