export default class Figure {
    constructor(width, height, color, left, top){
        this.width = width
        this.height = height
        this._color = color
        this.left = left
        this.top = top
    }

    draw(){
        const element = `
        <div style="width:${this.width}px;height:${this.height}px;background:${this.color};left:${this.left}px;top:${this.top}px;position:absolute"></div>
        `
        document.body.insertAdjacentHTML('afterbegin', element)
    }

    get area(){
        return this.width * this.height
    }

    get color(){
        return this._color
    }
 //incupsuliacia
    set color(newColor){
        if(newColor === ''){
            return alert('set color')
        }
        this._color = newColor
    }
}

