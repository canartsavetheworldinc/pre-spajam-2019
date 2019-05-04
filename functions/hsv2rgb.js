import RGB from "./RGB"

export default function(h, s, v = 1) {
	const c = v * s
	if(h === undefined)
		return new RGB(v-c,v-c,v-c)
	if(h < 0)
		h *= -1
	if(h >= 360)
		h = h % 360
	const hp = h / 60
	const x = c * (1 - Math.abs(hp % 2 - 1))
	let ret = new RGB()
	if(0 <= hp && hp < 1) {
		ret = new RGB(c, x, 0)
	} else if(1 <= hp && hp < 2) {
		ret = new RGB(x, c, 0)
	} else if(2 <= hp && hp < 3) {
		ret = new RGB(0, c, x)
	} else if(3 <= hp && hp < 4) {
		ret = new RGB(0, x, c)
	} else if(4 <= hp && hp < 5) {
		ret = new RGB(x, 0, c)
	} else if(5 <= hp && hp < 6) {
		ret = new RGB(c, 0, x)
	}
	ret.r += v - c
	ret.g += v - c
	ret.b += v - c
	return ret
}
