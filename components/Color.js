import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, Text, View } from "react-native"

import ColorWheel from "./ColorWheel"
import Result from "./Result"
import suggest from "../functions/suggest"
import ColorStackPanel from "./ColorStackPanel"
import * as colorActions from "../actions"

const colorStackHeight = 180

class Color extends React.Component {
	render() {
		const selected = this.props.selected
		const lastSelected = selected.slice(-1)[0]
		return (
			<View style={ styles.container }>
				<ColorStackPanel height={ colorStackHeight } colors={ this.props.selected } order="asc" />
				<View style={ styles.content }>
					{ selected.length < 4 && <ColorWheel height={ -1 * colorStackHeight * 2 } zIndex={ 100 } colors={ suggest(lastSelected) }></ColorWheel> }
					{ selected.length >= 4 && <Result></Result> }
				</View>
				<ColorStackPanel height={ colorStackHeight } colors={ this.props.selected } order="desc" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		flexGrow: 1
	}
})

export default connect(
	state => ({
		selected: state.color.selected
	}),
	dispatch => ({
		colorActions: bindActionCreators(colorActions, dispatch)
	})
)(Color)
