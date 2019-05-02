import React from "react"
import { StyleSheet, Text, View } from "react-native"
export default class ColorStack extends React.Component {
	render() {
		return (
			<View style = {[styles.container,{backgroundColor:this.props.color}]}>
				<Text></Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
  	alignItems: 'center',
    position:'relative',
    height:40,
    bottom:0
  }
})