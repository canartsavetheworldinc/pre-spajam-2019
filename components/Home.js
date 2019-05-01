import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import Button from "./Button"
export default class extends React.Component {
	handlePress = () =>  {
		Actions.color()
	}
	render() {
		return (
			<View>
				<Button onPress = {this.handlePress} name = "春" spring/>
				<Button onPress = {this.handlePress} name = "夏" summer/>
				<Button onPress = {this.handlePress} name = "秋" fall/>
				<Button onPress = {this.handlePress} name = "冬" winter/>
			</View>
		)
	}
}
