import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, TouchableOpacity } from "react-native"

import * as colorActions from "../actions"

class ColorStack extends React.Component {
	render() {
		const { height, color, index } = this.props
		return (
			<View height={ height || 40 } style={ { backgroundColor: color } }>
				<TouchableOpacity style={ styles.button } onPress={ e => {
					// console.log(index)
					const selected = this.props.selected
					const n = selected.length - index
					for(let i = 0; i < n; i++)
						this.props.colorActions.popColor()
				} }></TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		height: "100%"
	}
})

export default connect(
	state => ({
		selected: state.color.selected
	}),
	dispatch => ({
		colorActions: bindActionCreators(colorActions, dispatch)
	})
)(ColorStack)
