import React from "react"
import { StyleSheet, View } from "react-native"
import ColorStack from "./ColorStack"

export default class extends React.Component {
	render() {
		const colors = this.props.colors
		// console.log(colors)
		if(!colors)
			throw new Error("colors is undifined")
		const colorStacks = []
		for(let i in colors) {
			colorStacks.push(<ColorStack key={ i } color={ colors[i].hex }></ColorStack>)
			// console.log(colors[i].hex)
		}
		return (
			<View style = {[styles.container, this.props.order === "desc" && styles.desc]}>
				{ colorStacks }
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	desc: {
		flexDirection: "column-reverse"
	}
})