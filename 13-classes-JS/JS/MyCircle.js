export default class MyCircle {
    constructor(radius){
        this._radius = radius
    }

    get radius() {
        return this._radius
    }

    set radius(newRadius){
        this._radius = newRadius
    }

    get diametr() {
        return this._radius * 2
    }

    area(){
        return (Math.PI * Math.pow(this._radius, 2)).toFixed(2)
    }

    perim(){
        return (Math.PI * this.diametr).toFixed(2)
    }
}