import React from "react"
import { Provider } from "react-redux"
import { Router, Stack, Scene } from "react-native-router-flux"

import Color from "./components/Color"

import createStore from "./store"

const store = createStore()

export default class App extends React.Component {
	render() {
		return (
			<Provider store={ store }>
				<Router>
					<Stack key="root">
						<Scene key="select" component={ Color } back="" title="" hideNavBar></Scene>
					</Stack>
				</Router>
			</Provider>
		)
	}
}
