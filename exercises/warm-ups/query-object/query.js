
// https://coursework.vschool.io/query-it/

const database = [
    { firstName: "Jack", lastName: "Smith", age: 2 },
    { firstName: "Jill", lastName: "Johnson", age: 20 },
    { firstName: "Jill", lastName: "Smith", age: 100 },
    { firstName: "Jack", lastName: "White", age: 2 }
];

const filterDatabase = (queryObject, database) => {
    // if (queryObject.length === 0) {
    //     return true;
    // } 
    
        return database.filter(data => {
            for (key in queryObject) {
                if (data[key] !== queryObject[key]) {
                    return false;
                }
                return true;
            }
        })
    }


console.log(filterDatabase({firstName: "Jack"}, database));