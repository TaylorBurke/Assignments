class Rectangle {
    constructor(sideA, sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea() { return this.sideA * this.sideB };
    getPerimeter() { return (this.sideA + this.sideB) * 2 };
}

class Circle {

    constructor(rad) {
        this.rad = rad;
    }

    getArea() {
        let answer = (this.rad * this.rad) * (Math.PI);
        return answer;
    }

    getPerimeter() {
        return this.rad * (Math.PI * 2);
    }

}

let q = new Circle(4.44);
console.log(q.getArea(4.44));
console.log(q.getPerimeter(4.44));