class Remote {
	protected device: Device

	constructor(device: Device) {
		this.device = device
	}

	togglePower() {
		if (this.device.isEnabled()) {
			this.device.disable()
			return
		}

		this.device.enable()
	}

	volumeDown() {
		this.device.setVolume(this.device.getVolume() - 10)
	}

	volumeUp() {
		this.device.setVolume(this.device.getVolume() + 10)
	}

	channelDown() {
		this.device.setChannel(this.device.getChannel() - 1)
	}

	channelUp() {
		this.device.setChannel(this.device.getChannel() + 1)
	}
}

class AdvancedRemote extends Remote {
	mute() {
		this.device.setVolume(0)
	}
}

interface Device {
	isEnabled(): boolean
	enable(): void
	disable(): void
	getVolume(): number
	setVolume(percent: number): void
	getChannel(): number
	setChannel(channel: number): void
}

class Tv implements Device {
	private enabled = false
	private volume = 50
	private channel = 2

	isEnabled(): boolean {
		return this.enabled
	}

	enable() {
		console.log(`[Tv]: enable`)
		this.enabled = true
	}

	disable() {
		console.log(`[Tv]: disable`)
		this.enabled = false
	}

	getVolume() {
		console.log(`[Tv]: getVolume ${this.volume}`)
		return this.volume
	}

	setVolume(percent: number) {
		console.log(`[Tv]: setVolume ${percent}`)
		this.volume = percent
	}

	getChannel() {
		console.log(`[Tv]: getChannel ${this.channel}`)
		return this.channel
	}

	setChannel(channel: number) {
		console.log(`[Tv]: setChannel ${channel}`)
		this.channel = channel
	}
}

class Radio implements Device {
	private enabled = true
	private volume = 20
	private channel = 6

	isEnabled(): boolean {
		return this.enabled
	}

	enable() {
		console.log(`[Radio] enable`)
		this.enabled = true
	}

	disable() {
		console.log(`[Radio] disable`)
		this.enabled = false
	}

	getVolume() {
		console.log(`[Radio] getVolume ${this.volume}`)
		return this.volume
	}

	setVolume(percent: number) {
		console.log(`[Radio] setVolume ${percent}`)
		this.volume = percent
	}

	getChannel() {
		console.log(`[Radio] getChannel ${this.channel}`)
		return this.channel
	}

	setChannel(channel: number) {
		console.log(`[Radio] setChannel ${channel}`)
		this.channel = channel
	}
}

function main() {
	const tv = new Tv()
	const tvRemote = new Remote(tv)
	tvRemote.togglePower()

	tvRemote.volumeUp()
	tvRemote.volumeUp()
	tvRemote.channelUp()
	tvRemote.channelDown()

	const radio = new Radio()
	const radioRemote = new AdvancedRemote(radio)
	radioRemote.togglePower()

	radioRemote.volumeUp()
	radioRemote.volumeUp()
	radioRemote.channelUp()
	radioRemote.channelDown()
	radioRemote.mute()
}

main()
