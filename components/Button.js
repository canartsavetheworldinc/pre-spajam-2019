import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

export default class Button extends React.Component {
  render() {
    const { height, width } = this.props
    return (
      <View height={ height || 50 } style={ styles.container }>
        <TouchableOpacity width={ width || 100 } style={ styles.button } onPress={this.props.onPress}>
          <Text style={ styles.text } onPress={this.props.onPress}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    paddingRight: 30,
    paddingLeft: 30,
    height: "100%",
    borderRadius: 10
  },
  text: {
    fontSize: 20
  }
})
