import React from "react"
import { StyleSheet, View } from "react-native"
import ColorStack from "./ColorStack"

export default class extends React.Component {
	render() {
		const { colors, height } = this.props
		const numOfColor = 5
		// console.log(colors)
		if(!colors)
			throw new Error("colors is undifined")
		const colorStacks = []
		colorStacks.push(<ColorStack height={ height / numOfColor } index={ -1 } key={ -1 }></ColorStack>)
		for(let i in colors) {
			colorStacks.push(<ColorStack height={ height / numOfColor } index={ i } key={ i } color={ colors[i].hex }></ColorStack>)
			// console.log(colors[i].hex)
		}
		return (
			<View height={ height } style = {[styles.container, this.props.order === "desc" && styles.desc]}>
				{ colorStacks }
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
	},
	desc: {
		flexDirection: "column-reverse"
	}
})