import RGB from "./RGB"
import hsv2rgb from "./hsv2rgb"
import rgb2hue from "./rgb2hue"

export default function(color) {
	// if(!color){
	// 	return colorWheel(8)
	// }
	return colorSuggest(new RGB(0,0,255))
	//return [new RGB(255, 60, 130), new RGB(255, 90, 130), new RGB(255, 120, 130), new RGB(255, 150, 130), new RGB(255, 180, 130), new RGB(255, 210, 130), new RGB(255, 240, 130)]
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

function colorSuggest(color){
	const ret = []
	ret.push(color)
	const baseAngle = rgb2hue(color)
	for(let i = 0; i < 7; i++){
		let suggestAngle = baseAngle + suggestAngles[i]
		if((suggestAngle / 360) >= 1){
			suggestAngle = suggestAngle % 360
		}
		const rgb = hsv2rgb(suggestAngle,1,1)
		console.log(rgb)
		const red = rgb.r * 255
		const green = rgb.g * 255
		const blue = rgb.b * 255
		ret.push(new RGB(red, green, blue))
	}
	return ret
}
const suggestAngles = [45,120,135,180,225,240,315]