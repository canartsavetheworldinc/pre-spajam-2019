import RGB from "./RGB"
import hsv2rgb from "./hsv2rgb"

export default function(color) {
	return colorWheel(8)
	// return [new RGB(255, 60, 130), new RGB(255, 90, 130), new RGB(255, 120, 130), new RGB(255, 150, 130), new RGB(255, 180, 130), new RGB(255, 210, 130), new RGB(255, 240, 130)]
}

function colorWheel(n) {
	const ret = []
	for(let i = 0; i < n; i++) {
		const s = 1
		const h = i / n * 360
		const rgb = hsv2rgb(h, s, 1)
		const red = rgb.r * 255
		const green = rgb.g * 255
		const blue = rgb.b * 255
		ret.push(new RGB(red, green, blue))
	}
	return ret
}
