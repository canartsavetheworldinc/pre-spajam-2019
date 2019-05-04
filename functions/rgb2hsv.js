import RGB from "./RGB"

export default function(r = 1, g = 1, b = 1) {
	if(r>1)
		r/=255
	if(b>1)
		b/=255
	if(g>1)
		g/=255
	const max = Math.max(r,g,b)
	const min = Math.min(r,g,b)
	const v = max
	const s = (max - min) / max
	let h
	if(min === max)
		h = undefined
	if(min === b)
		h = 60 * (g - r) / (max - min) + 60
	if(min === r)
		h = 60 * (b - g) / (max - min) + 180
	if(min === g)
		h = 60 * (r - b) / (max - min) + 300
	return new RGB(h,s,v)
}
