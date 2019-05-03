import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default class ColorStack extends React.Component {
	render() {
		const { height } = this.props
		return (
			<View height={ height || 40 } style = { { backgroundColor:this.props.color } }></View>
		)
	}
}
