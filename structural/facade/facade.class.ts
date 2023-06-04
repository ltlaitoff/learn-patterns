class VideoFile {
	private filename: string

	constructor(filename: string) {
		this.filename = filename
	}
}

class OggCompressionCodec {}

class MPEG4CompressionCodec {}

class CodecFactory {
	constructor() {}

	public extract(file: VideoFile) {
		return 'TEST_CODEC'
	}
}

class BitrateReader {
	read(filename: string, codec: string) {
		return `filename: ${filename}, read codec: ${JSON.stringify(codec)}`
	}

	convert(buffer: string, codec: any) {
		return `buffer: ${buffer}, codec: ${JSON.stringify(codec)}`
	}
}

class AudioMixer {
	fix(value: string) {
		console.log(`fix: ${value}`)
		return `fixed audio. ${value}`
	}
}

class VideoConverter {
	convert(filename: string, format: string): string {
		const file = new VideoFile(filename)
		const sourceCodec = new CodecFactory().extract(file)

		let destinationCodec

		if (format == 'mp4') {
			destinationCodec = new MPEG4CompressionCodec()
		} else {
			destinationCodec = new OggCompressionCodec()
		}

		const buffer = new BitrateReader().read(filename, sourceCodec)
		let result = new BitrateReader().convert(buffer, destinationCodec)
		result = new AudioMixer().fix(result)

		return result
	}
}

class Application {
	main() {
		const convertor = new VideoConverter()
		const mp4 = convertor.convert('funny-cats-video.ogg', 'mp4')
		console.log(mp4)
	}
}

new Application().main()
