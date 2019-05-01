import React from "react"
import { Text, View } from "react-native"

import ColorWheel from "./ColorWheel"

export default class extends React.Component {
	render() {
		return (
			<View>
				<Text>好きな色をえらんでね</Text>
				<ColorWheel></ColorWheel>
			</View>
		)
	}
}
