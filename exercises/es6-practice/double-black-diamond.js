// https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators-2/

populatePeople = (names) => {  
    return names.map((name) => {
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {
            firstName: firstName, 
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));  
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
