interface Button {
	render(): void
}

class WinButton implements Button {
	render(): void {
		console.log('WinButton render')
	}
}

class MacButton implements Button {
	render(): void {
		console.log('MacButton render')
	}
}

interface Checkbox {
	paint(): void
}

class WinCheckbox implements Checkbox {
	paint(): void {
		console.log('WinCheckbox paint')
	}
}

class MacCheckbox implements Checkbox {
	paint(): void {
		console.log('MacCheckbox paint')
	}
}

interface GUIFactory {
	createButton(): Button
	createCheckbox(): Checkbox
}

class WinFactory implements GUIFactory {
	createButton() {
		return new WinButton()
	}

	createCheckbox() {
		return new WinCheckbox()
	}
}

class MacFactory implements GUIFactory {
	createButton() {
		return new MacButton()
	}

	createCheckbox() {
		return new MacCheckbox()
	}
}

class Application {
	private factory: GUIFactory
	private button!: Button
	private checkbox!: Checkbox

	constructor(factory: GUIFactory) {
		this.factory = factory
	}

	createUI() {
		this.button = this.factory.createButton()
		this.checkbox = this.factory.createCheckbox()
	}

	paint() {
		this.button.render()
		this.checkbox.paint()
	}
}

function main() {
	const app = new Application(new WinFactory())
	app.createUI()
	app.paint()
}

main()
