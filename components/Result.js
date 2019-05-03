import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, Text, View } from "react-native"

import Button from "./Button"

import * as colorActions from "../actions"

class Result extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.content }>
					<Text>{ JSON.stringify(this.props.selected) }</Text>
				</View>
				<View>
					<Button onPress={ this.props.colorActions.resetColor } name="Reset"></Button>
				</View>
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
)(Result)
