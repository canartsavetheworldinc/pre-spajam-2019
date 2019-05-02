import React from "react"
import { StyleSheet, View } from "react-native"
import ColorStack from "./ColorStack"
export default class extends React.Component {
	render() {
		return (
			<View style = {styles.container}>
				<ColorStack color = 'red'/>
				<ColorStack color = 'green'/>
				<ColorStack color = 'blue'/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
  	flex:1,
  	justifyContent: 'flex-end'
  	}
})