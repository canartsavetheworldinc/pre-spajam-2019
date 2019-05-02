import React from "react"
import { Provider } from "react-redux"
import { Router, Stack, Scene } from "react-native-router-flux"

import Home from "./components/Home"
import Color from "./components/Color"

import createStore from "./store"

const store = createStore()

export default class App extends React.Component {
	render() {
		return (
			<Provider store={ store }>
				<Router>
					<Stack key="root">
						{/* <Scene key="home" component={ Home } title="Home"></Scene> */}
						<Scene key="color" component={ Color } title="Color"></Scene>
					</Stack>
				</Router>
			</Provider>
		)
	}
}
