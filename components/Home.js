import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import Button from "./Button"
export default class extends React.Component {
	handlePress = () =>  {
		Actions.color()
	}
	render() {
		return (
			<View>
				<Button onPress = {this.handlePress} name = "Color"/>
			</View>
		)
	}
}