import { COLOR_PUSH, COLOR_POP, COLOR_RESET } from "../constants"

const initialState = {
	selected: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case COLOR_PUSH:
			const color = action.payload
			// console.log(color.r, color.g, color.b)
			// console.log(state)
			return {
				...state,
				selected: state.selected.concat(color)
			}
		case COLOR_POP:
			return {
				...state,
				selected: state.selected.slice(0, -1)
			}
		case COLOR_RESET:
			return {
				...state,
				selected: []
			}
		default:
			return state
	}
}
