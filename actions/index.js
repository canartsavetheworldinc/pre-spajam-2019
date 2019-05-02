import { COLOR_PUSH, COLOR_POP } from "../constants"
import RGB from "../functions/RGB";

export const pushColor = (color) => {
	if(!(color instanceof RGB))
		throw new Error("color must be an instance of RGB")
	return {
		type: COLOR_PUSH,
		payload: color
	}
}
export const popColor = () => ({
	type: COLOR_POP
})
