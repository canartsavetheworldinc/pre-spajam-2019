import { compose, createStore } from "redux"
import reducer from "./reducers"

export default () => compose()(createStore)(reducer)
