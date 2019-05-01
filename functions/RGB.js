export default class {
	constructor(r = 0, g = 0, b = 0) {
		this.r = r
		this.g = g
		this.b = b
	}
	get hex() {
		return `#${ ("0" + (this.r | 0).toString(16)).slice(-2) }${ ("0" + (this.g | 0).toString(16)).slice(-2) }${ ("0" + (this.b | 0).toString(16)).slice(-2) }`
	}
}
