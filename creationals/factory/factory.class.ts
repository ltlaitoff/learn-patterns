interface Button {
	render(): void
	onClick(): void
}

class WindowsButton implements Button {
	render(): void {
		console.log('render WindowsButton')
	}

	onClick(): void {
		console.log('onClick WindowsButton')
	}
}

class HTMLButton implements Button {
	render(): void {
		console.log('render HTMLButton')
	}

	onClick(): void {
		console.log('onClick HTMLButton')
	}
}

abstract class Dialog {
	render() {
		const onButton: Button = this.createButton()
		onButton.onClick()
		onButton.render()
	}

	abstract createButton(): Button
}

class WindowsDialog extends Dialog {
	createButton(): Button {
		return new WindowsButton()
	}
}

class WebDialog extends Dialog {
	createButton(): Button {
		return new HTMLButton()
	}
}

class Application {
	dialog: Dialog

	constructor(os: 'windows' | 'web') {
		if (os === 'windows') {
			this.dialog = new WindowsDialog()
			return
		}

		if (os === 'web') {
			this.dialog = new WebDialog()
			return
		}

		throw new Error(`Unknown os '${os}'`)
	}
}

function main() {
	const app = new Application('windows')
	app.dialog.render()
}

main()
