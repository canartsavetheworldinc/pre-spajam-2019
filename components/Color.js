import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, Text, View } from "react-native"

import ColorWheel from "./ColorWheel"
import suggest from "../functions/suggest"
import ColorStackPanel from "./ColorStackPanel"
import * as colorActions from "../actions"

class Color extends React.Component {
	render() {
		const lastSelected = this.props.selected.slice(-1)[0]
		return (
			<View style={ styles.container }>
				<ColorStackPanel colors={ this.props.selected } order="asc" />
				<ColorWheel colors={ suggest(lastSelected) }></ColorWheel>
				<ColorStackPanel colors={ this.props.selected } order="desc" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between"
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
