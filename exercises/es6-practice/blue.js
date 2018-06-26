// https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators-2/

const realAnimals = ["dog", "cat", "mouse"];  
const magicalAnimals = ["jackolope"];  
const mysteriousAnimals = ["platypus"];

// spread operator and rest operator
function combineAnimals(...args) {  

    return args;
}

console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals)); 


