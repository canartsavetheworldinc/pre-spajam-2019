import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Dimensions, View } from "react-native"
import Svg, { Rect } from "react-native-svg"

import * as colorActions from "../actions"
import rgb2hex from "../functions/rgb2hex"

class ColorPreview extends React.Component {
	render() {
		const { colors } = this.props
		const rect = {
			w: 50,
			h: 50
		}
		const offset = {
			x: rect.w * 2,
			y: 0
		}
		const rects = []
		for(let i in colors) {
			const x = offset.x + rect.w * i
			const y = offset.y
			const color = colors[i]
			const red = color.r
			const green = color.g
			const blue = color.b
			// const stroke = rgb2hex(red * 0.85, green * 0.85, blue * 0.85)
			const fill = rgb2hex(red, green, blue)
			rects.push(<Rect
				onPress={e => {
				}}
				key={ i }
				x={ x }
				y={ y }
				width={ rect.w }
				height={ rect.h }
				// stroke={ stroke }
				strokeWidth="2"
				fill={ fill }>
			</Rect>)
		}
		return (
			<View>
				<Svg viewBox={ `0 0 ${ rect.w * 8 } ${ rect.h }` } height={ rect.h } width="100%">{ rects }</Svg>
				{/* <Svg zIndex={ zIndex || 0 } viewBox={ `0 0 ${ dim.width } ${ height }` } height={ height || "100%" } width={ dim.width }>{ dots }</Svg> */}
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
)(ColorPreview)
