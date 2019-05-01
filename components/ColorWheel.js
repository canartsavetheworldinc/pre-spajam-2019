import React from "react"
import { Dimensions, Text, View } from "react-native"
import Svg, { Circle } from "react-native-svg"

export default class extends React.Component {
	render() {
		const dim = Dimensions.get("window")
		// console.log(dim)
		const n = 8
		const offset = {
			x: 0,
			y: -1 * dim.height * 0.23	// 896px で 200px くらい
		}
		const origin = {
			x: dim.width / 2 + offset.x | 0,
			y: dim.height / 2 + offset.y | 0
		}
		const r = dim.width * 0.36	// 414px で 150px くらい
		let dots = []
		for(let i = 0; i < n; i++) {
			const s = 1
			const h = i / n * 360
			const rad = i / n * 2 * Math.PI - Math.PI * 0.5
			const x = r * Math.cos(rad) + origin.x
			const y = r * Math.sin(rad) + origin.y
			const rgb = this.hsv2rgb(h, s, 1)
			const red = rgb.r * 255
			const green = rgb.g * 255
			const blue = rgb.b * 255
			const stroke = this.rgb2hex(red * 0.85, green * 0.85, blue * 0.85)
			const fill = this.rgb2hex(red, green, blue)
			dots.push(<Circle
				key={ i }
				cx={ x }
				cy={ y }
				r="20"
				stroke={ stroke }
				strokeWidth="2"
				fill={ fill }>
			</Circle>)
		}
		return (
			<View>
				<Svg height={ dim.height } width={ dim.width }>{ dots }</Svg>
			</View>
		)
	}
	hsv2rgb(h, s, v = 1) {
		const rgb = function(r = 0, g = 0, b = 0) {
			return { r, g, b }
		}
		if(h === undefined)
			return rgb()
		if(h < 0)
			h *= -1
		if(h >= 360)
			h = h % 360
		const c = v * s
		const hp = h / 60
		const x = c * (1 - Math.abs(hp % 2 - 1))
		let ret = rgb()
		if(0 <= hp && hp < 1) {
			ret = rgb(c, x, 0)
		} else if(1 <= hp && hp < 2) {
			ret = rgb(x, c, 0)
		} else if(2 <= hp && hp < 3) {
			ret = rgb(0, c, x)
		} else if(3 <= hp && hp < 4) {
			ret = rgb(0, x, c)
		} else if(4 <= hp && hp < 5) {
			ret = rgb(x, 0, c)
		} else if(5 <= hp && hp < 6) {
			ret = rgb(c, 0, x)
		}
		for(let key in ret) {
			ret[key] += v - c
		}
		return ret
	}
	rgb2hex(r = 0, g = 0, b = 0) {
		return `#${ ("0" + (r | 0).toString(16)).slice(-2) }${ ("0" + (g | 0).toString(16)).slice(-2) }${ ("0" + (b | 0).toString(16)).slice(-2) }`
	}
}
