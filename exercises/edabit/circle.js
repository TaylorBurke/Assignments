class Rectangle {
    constructor(sideA,sideB){
      this.sideA = sideA;
      this.sideB = sideB;
    }
      
    getArea(){return this.sideA*this.sideB};
    getPerimeter(){return (this.sideA + this.sideB) *2 };
  }
  
  // (PIr^2) <= getArea getPerimeter =>(2PI*r)
  
  class Circle {
      constructor(rad){
          this.rad = rad;
      }
      
          getPerimeter(){}
          getArea(){}
  }
  
  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());