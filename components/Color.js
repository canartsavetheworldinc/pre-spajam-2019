import React from "react"
import { StyleSheet, Text, View } from "react-native"

import ColorWheel from "./ColorWheel"
import suggest from "../functions/suggest"

export default class extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<ColorStackPanel order="asc" />
				<ColorWheel colors={ suggest() }></ColorWheel>
				<ColorStackPanel order="desc" />
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
