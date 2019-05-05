import RGB from "./RGB"
import hsv2rgb from "./hsv2rgb"
import rgb2hsv from "./rgb2hsv.js"
export default function(color,v) {
	if(!(color instanceof RGB))
		throw new Error("Color must be an instance of RGB.")
	let hsv = rgb2hsv(color.r,color.g,color.b)
	hsv.b = v
	let rgb = hsv2rgb(hsv.r,hsv.g,hsv.b)
	rgb.r *= 255
	rgb.g *= 255
	rgb.b *= 255
	return rgb
}