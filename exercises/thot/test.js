// for research purposes only

// var total = 0;
// while(true) {
//     total++
//     console.log(total)
// }




// var str = "Hello my name is Albert";

// var changeName = function (str, name) {
//     var arr = str.split(' ');
//     arr.splice(4, 1, name)
//     console.log( arr.join(' '))
// }

// changeName(str, "Taylor");


// example of prototypical inheritance being called

var Animal = function (){
    this.hasCellWall = false;
}

Animal.prototype.eat = function(){
    console.log("Nom nom")
}

Animal.prototype.sleep = function(){
    console.log("zzzZZzzzzZZZZZzzzZZzzz")
}

var Dinosaur = function()
{
    Animal.call(this);
    this.extinct = true;
    this.eat = function(){
        console.log("Chomp chomp")
    }
}

Dinosaur.prototype = Object.create(Animal.prototype);

var Mammal = function(){
    // this shit right here tells Mammal that it inherits properties of Animal
    Animal.call(this)
    this.hasFur = true;
}

Mammal.prototype = Object.create(Animal.prototype);

Mammal.prototype.lactate = function(){
    console.log("nom nom nom")
}

var dog = new Mammal();
var fish = new Animal();
var tRex = new Dinosaur();

console.log(dog.hasCellWall);
console.log(tRex.hasCellWall);
dog.eat();
dog.lactate();
fish.sleep();
tRex.eat();