import React from "react"
import { Text, View } from "react-native"

import ColorWheel from "./ColorWheel"
import suggest from "../functions/suggest"
import ColorStackPanel from "./ColorStackPanel"
export default class extends React.Component {
	render() {
		return (
			<View>
				<Text>好きな色をえらんでね</Text>
				<ColorWheel colors={ suggest() }></ColorWheel>
				<ColorStackPanel/>
			</View>
		)
	}
}
