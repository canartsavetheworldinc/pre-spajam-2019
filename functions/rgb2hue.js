import RGB from "./RGB"
export default function(color) {
	if(!(color instanceof RGB))
		throw new Error("Color must be an instance of RGB.")
	const R = color.r / 255
	const G = color.g / 255
	const B = color.b / 255
	if(R === G && G === B){
		return
	}
	return (Math.atan(Math.sqrt(3) * (G - B)/(2 * R - G - B)) + Math.PI / 2) * 180 / Math.PI
}