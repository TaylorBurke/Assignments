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

// var Animal = function (){
//     this.hasCellWall = false;
// }

// Animal.prototype.eat = function(){
//     console.log("Nom nom")
// }

// Animal.prototype.sleep = function(){
//     console.log("zzzZZzzzzZZZZZzzzZZzzz")
// }

// var Dinosaur = function()
// {
//     Animal.call(this);
//     this.extinct = true;
//     this.eat = function(){
//         console.log("Chomp chomp")
//     }
// }

// Dinosaur.prototype = Object.create(Animal.prototype);

// var Mammal = function(){
//     // this shit right here tells Mammal that it inherits properties of Animal
//     Animal.call(this)
//     this.hasFur = true;
// }

// Mammal.prototype = Object.create(Animal.prototype);

// Mammal.prototype.lactate = function(){
//     console.log("nom nom nom")
// }

// var dog = new Mammal();
// var fish = new Animal();
// var tRex = new Dinosaur();

// console.log(dog.hasCellWall);
// console.log(tRex.hasCellWall);
// dog.eat();
// dog.lactate();
// fish.sleep();
// tRex.eat();


// const dealership = {
//     name: "Nice Guys Toyota",
//     cars: [{name: "Yaris"}, {name: "Camry"}, {name: "Prius"}],

// }

// function Enemy(name, hp = 100){
//     this.name = name;
//     this.hp = hp;
// }

// console.log(new Enemy("Bobby Mcgee", 50));

// // example of spread operator

// const beg = [1, 2, 3];
// const end = [4, 5, 6];

// const combined = [...beg, ...end];

// console.log(combined);

// const Animal = function(){
//     this.name = name;
//     this.hasCellWall = flase;
// }

// Animal.prototype.makeSound = function(sound){
//     console.log(`${this.name} goes ${sound}`)
// }

// const Mammal = function(name){
//     Animal.call(this, name);
//     this.hasFur = true;
// }

// Mammal.prototype = Object.create(Animal.prototype);

// const dog = new Mammal("Sammy");
// const platypus = new Mammal("Harry");
// platypus.makeSound("womp");

// console.log(platypus);

// ES6

// class Animal {
//     constructor(species){
//         this.species = species;
//         this.hasCellWall = false;
//     }
//     makeSound(sound){
//         console.log(`${this.species} goes ${sound}`);
//     }
// }

// class Mammal extends Animal{
//     constructor(species){
//         super(species);
//         this.hasFur = true;
//     }
// }

// const dog = new Mammal("Canis lupis familiaris");
// const platypus = new Mammal("Ornithorhynchus anatinus");

// console.log(platypus.makeSound("womp"));

// console.log(dog);
// console.log(platypus);



// class Player{
//     constructor(){
//         this.name = "";
//         this.totalCoins = 0;
//         // set the other static properties (anything other than a method)

//     }
//     setName(namePicked) {
//         this.name = namePicked;
//     }
//     
// }


// THIS is created by a function and always refers to the object which it is a method on
// there is no difference between a function and a method except that a method happens to be a property of an object. This is always an object, the context determines what it refers to.

// class Ambassador{
//     constructor(){
//         this.messages = ['test', 'message', 'here'];
//         this.translations = [];
//     }
//     translate() {
//         this.messages.forEach(str => {
//             this.translations.push(str.toUpperCase());
//         })
//         console.log(this.translation);
//     }
// }

// const ambassador = new Ambassador();

// ambassador.translate();

const ambassador = {
    messages: ["test", "this"],
    name: "Johny Baggo",
    translator: {
        name: "Ivan Ivanovich",
            translate: () => {
            console.log(ambassador.messages);

            // if you try to use THIS in an arrow function it needs to be defined somewhere else
        }
    }
}
ambassador.translator.translate()