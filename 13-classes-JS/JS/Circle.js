import Square from "./Square.js"

export default class Circle extends Square {
    constructor(width, color, left, top){
        super(width, color, left, top)
    }

    draw(){
        const element = `
        <div style="width:${this.width}px;height:${this.width}px;background:${this.color};left:${this.left}px;top:${this.top}px;position:absolute;border-radius:50%"></div>
        `
        document.body.insertAdjacentHTML('afterbegin', element)
    }

    get area(){
        return Math.PI * Math.pow(this.width / 2, 2)
    }
}