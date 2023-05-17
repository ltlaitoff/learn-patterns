class Database {
	private static instance: Database | null = null

	private constructor() {
		console.log('Database constructor', Date.now())
	}

	public static getInstance() {
		if (Database.instance === null) {
			Database.instance = new Database()
		}

		return Database.instance
	}

	public query(value: string) {
		console.log('query: ', value)
	}
}

function main() {
	const foo: Database = Database.getInstance()
	foo.query('foo')

	const bar: Database = Database.getInstance()
	bar.query('bar')
}

main()
