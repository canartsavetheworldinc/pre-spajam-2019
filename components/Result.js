import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, Text, View } from "react-native"

import ColorPreview from "./ColorPreview"
import Button from "./Button"

import * as colorActions from "../actions"

class Result extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.content }>
					<Text>{ JSON.stringify(this.props.selected) }</Text>
					<View style={ styles.preview }>
						<ColorPreview colors={ this.props.selected }></ColorPreview>
					</View>
				</View>
				<View style={ styles.buttonContainer }>
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
	},
	preview: {
		marginTop: 40,
		marginBottom: 40
	},
	buttonContainer: {
		margin: 40
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
