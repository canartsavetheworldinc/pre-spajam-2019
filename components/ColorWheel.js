import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Dimensions, View } from "react-native"
import Svg, { Circle } from "react-native-svg"
// import SvgUri from "react-native-svg-uri"

// import Droid from "../assets/android.svg"
import * as colorActions from "../actions"
import rgb2hex from "../functions/rgb2hex"

class ColorWheel extends React.Component {
	render() {
		const { colors } = this.props
		let { zIndex, height } = this.props
		if(!colors)
			throw new Error(`colors is not defined`)
		const dim = Dimensions.get("window")
		// console.log(dim)

		height = +height
		if(height < 0)
			height += dim.height

		const offset = {
			x: 0,
			y: 0
		}
		const origin = {
			x: dim.width / 2 + offset.x | 0,
			y: height / 2 + offset.y | 0
		}
		// const offset = {
		// 	x: 0,
		// 	y: -1 * dim.height * 0.26
		// }
		// const origin = {
		// 	x: dim.width / 2 + offset.x | 0,
		// 	y: dim.height / 2 + offset.y | 0
		// }
		const r = dim.width * 0.3
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
				onPress={e => {
					this.props.colorActions.pushColor(color)
				}}
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
				<Svg zIndex={ zIndex || 0 } viewBox={ `0 0 ${ dim.width } ${ height }` } height={ height || "100%" } width={ dim.width }>{ dots }</Svg>
			</View>
		)
	}
}

export default connect(
	state => ({
		selected: state.color.selected
	}),
	dispatch => ({
		colorActions: bindActionCreators(colorActions, dispatch)
	})
)(ColorWheel)
