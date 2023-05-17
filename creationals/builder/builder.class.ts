interface Builder {
	reset(): void
	setSeats(value: number): void
	setEngine(): void
	setTripComputer(): void
	setGPS(): void
}

class Car {
	public seats = 0
	public engine = false
	public tripComputer = false
	public gps = false
}

class Manual {
	public seatsCount = 0
	public engineExists = false
	public tripComputerExists = false
	public gpsExists = false
}

class CarBuilder implements Builder {
	private car!: Car

	reset() {
		this.car = new Car()
	}

	setSeats(seats: number) {
		this.car.seats = seats
	}

	setEngine() {
		this.car.engine = true
	}

	setTripComputer() {
		this.car.tripComputer = true
	}

	setGPS() {
		this.car.gps = true
	}

	getResults(): Car {
		return this.car
	}
}

class CarManualBuilder implements Builder {
	private manual!: Manual

	reset() {
		this.manual = new Manual()
	}

	setSeats(seats: number) {
		this.manual.seatsCount = seats
	}

	setEngine() {
		this.manual.engineExists = true
	}

	setTripComputer() {
		this.manual.tripComputerExists = true
	}

	setGPS() {
		this.manual.gpsExists = true
	}

	getResults(): Manual {
		return this.manual
	}
}

class Director {
	createSportsCar(builder: Builder) {
		builder.reset()
		builder.setSeats(2)
		builder.setEngine()
		builder.setGPS()
		builder.setTripComputer()
	}
}

function main() {
	const director = new Director()

	const carBuilder = new CarBuilder()
	director.createSportsCar(carBuilder)
	const sportCar: Car = carBuilder.getResults()
	console.log(sportCar)

	const carManualBuilder = new CarManualBuilder()
	director.createSportsCar(carManualBuilder)
	const sportCarManual: Manual = carManualBuilder.getResults()
	console.log(sportCarManual)
}

main()
