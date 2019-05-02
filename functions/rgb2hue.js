import RGB from "./RGB"
export default function(color) {
	const R = color.r / 255
	const G = color.b / 255
	const B = color.b / 255
	let H;
	if(R == G && G == B){
		return H
	}
	if(R >= G && G >= B){
		H = 60 * (G - B) / (R - B)
	}else if(G >= R && R >= B){
		H = 60 * (2 - (R - B)/(G - B))
	}else if(G >= B && B >= R){
		H = 60 * (2 + (B - R)/(G - R))
	}else if(B >= G && G >= R){
		H = 60 * (4 - (G - R)/(B - R))
	}else if (B >= R && R >= G){
		H = 60 * (4 - (G - R)/(B - R))
	}else if(R >= B && B >= G){
		H = 60 * (6 - (B - G)/(R - G))
	}
	return H
}