import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"

export default class extends React.Component {
	render() {
		return (
			<View>
				<Text onPress={ Actions.color }>色選択へ</Text>
			</View>
		)
	}
}
