
import Figure from "./figure.js"

export default class Square extends Figure {
    constructor(width, color, left, top){
        super(width, width, color, left, top)
    }

    get area(){
        return this.width * this.width
    }
}