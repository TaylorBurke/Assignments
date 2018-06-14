// // 1a
 
// function sum(x, y){  
//     //check data types first and throw error
//     if(typeof x !== "number" || typeof y !== "number"){
//         throw new TypeError ("inputs must be numbers");
//     }
//     return x + y;
//   }

// try {
//     sum("5", "23");
// }

// catch (err) {
//     console.log(err.message);
// }

// console.log(sum(3, 5));

// // 1b

// function sum(x, y){  
//     //check data types first and throw error
//     if(typeof x !== "number" || typeof y !== "number"){
//         throw new TypeError ("inputs must be numbers");
//     }
//     return x + y;
//   }

// try {
//     sum("1", "2");
// }

// catch (err) {
//     console.log(err.message);
// }

// // 2a

var user = {
    username: "sam",
    password: "123abc"
};


try {
   // login("san","123abc");
    login(user.username, user.password);
} 

catch (err) {
    console.log(err.message)
}

function login(username, password){  
    
    if( username === "sam" && password === "123abc"){
        console.log("Login Very Success")
    } else {
            throw new TypeError ("wrong username or password");
    }
}
