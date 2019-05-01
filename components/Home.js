import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import Button from "./Button"
export default class extends React.Component {
	render() {
		return (
			<View>
				<Text>Hello</Text>
				<Button onPress = {Actions.color} name = "春" spring/>
				<Button onPress = {Actions.color} name = "夏" sammer/>
				<Button onPress = {Actions.color} name = "秋" fall/>
				<Button onPress = {Actions.color} name = "冬" spring/>
			</View>
		)
	}
}
