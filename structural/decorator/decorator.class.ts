interface DataSource {
	writeData(data: string): void
	readData(): string
}

let FILE_DATA = ''

class FileDataSource implements DataSource {
	writeData(data: string) {
		console.log(`FileDataSource writeData: "${data}"`)
		FILE_DATA = data
	}

	readData() {
		console.log(`FileDataSource readData: "${FILE_DATA}"`)
		return FILE_DATA
	}
}

class DataSourceDecorator implements DataSource {
	protected wrapee: DataSource

	constructor(wrapee: DataSource) {
		this.wrapee = wrapee
	}

	writeData(data: string) {
		this.wrapee.writeData(data)
	}

	readData() {
		return this.wrapee.readData()
	}
}

class EncryptionDecorator extends DataSourceDecorator {
	writeData(data: string) {
		console.log(`EncryptionDecorator writeData: "${data.toUpperCase()}"`)
		this.wrapee.writeData(data.toUpperCase())
	}

	readData() {
		console.log(
			`EncryptionDecorator readData: "${this.wrapee.readData().toLowerCase()}"`
		)
		return this.wrapee.readData().toLowerCase()
	}
}

class CompressionDecorator extends DataSourceDecorator {
	writeData(data: string) {
		console.log(`CompressionDecorator writeData: "${data + '1'}"`)
		this.wrapee.writeData(data + '1')
	}

	readData() {
		const data = this.wrapee.readData()

		console.log(
			`CompressionDecorator readData: "${data.slice(0, data.length - 2)}"`
		)

		return data.slice(0, data.length - 2)
	}
}

function main() {
	let source = new FileDataSource()
	source.writeData('test data')
	console.log(source.readData())
	console.log()

	source = new CompressionDecorator(source)
	source.writeData('test data')
	console.log(source.readData())
	console.log()

	source = new EncryptionDecorator(source)
	source.writeData('test data')
	console.log(source.readData())
}

main()
