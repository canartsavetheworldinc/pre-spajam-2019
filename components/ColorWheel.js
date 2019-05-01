import React from "react"
import { Dimensions, View } from "react-native"
import Svg, { Circle } from "react-native-svg"
import SvgUri from "react-native-svg-uri"

// import Droid from "../assets/android.svg"
import rgb2hex from "../functions/rgb2hex"

export default class extends React.Component {
	render() {
		const colors = this.props.colors
		if(!colors)
			throw new Error(`colors is not defined`)
		const dim = Dimensions.get("window")
		// console.log(dim)
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
		for(let i in colors) {
			const n = colors.length
			const rad = i / n * 2 * Math.PI - Math.PI * 0.5
			const x = r * Math.cos(rad) + origin.x
			const y = r * Math.sin(rad) + origin.y
			const color = colors[i]
			const red = color.r
			const green = color.g
			const blue = color.b
			const stroke = rgb2hex(red * 0.85, green * 0.85, blue * 0.85)
			const fill = rgb2hex(red, green, blue)
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
		// console.log(<SvgUri width={300} height={300} svgXmlData={Drop}></SvgUri>)
		return (
			<View>
				<Svg height={ dim.height } width={ dim.width }>
				{/* <SvgUri width={300} height={300} svgXmlData={Droid}></SvgUri> */}
				{ dots }</Svg>
			</View>
		)
	}
}