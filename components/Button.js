import React from "react";
import { StyleSheet, Text, View } from "react-native"

export default class Button extends React.Component {

  render() {
    return (
      <View>
        <Text onPress={this.props.onPress}>{this.props.name}</Text>
      </View>
    );
  }
}