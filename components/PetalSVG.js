import React from "react"
import {StyleSheet, View } from "react-native"
import SvgUri from "react-native-svg-uri"

export default class PetalSVG extends React.Component {
	render() {
		return (
			<View style = {styles.container}>
				<SvgUri width="200" height="200" source={require('../assets/android.svg')} />
				<View>
					<SvgUri width="400" height="400" source={require('../assets/b1t6jJsJZW.svg')} />
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
  	backgroundColor:"red"
  }
})