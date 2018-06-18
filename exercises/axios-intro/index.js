// https://www.npmjs.com/package/axios

var axios = require("axios");

var url = "https://api.vschool.io/taylor/todo/";

getTodos = function(){
    axios.get("https://api.vschool.io/taylor/todo")
        .then(function(response){
        console.log(response.data);
        //do stuff with the request as needed
    })
.catch(function(err){
        // handle the error as needed
})
}

// function addTodo(toDoItem){
//     axios.post("https://api.vschool.io/taylor/todo", "drink tea")
//         .then(function(response){
//             console.log(response.data)
//         })
//     .catch(function(err){
//         console.log(err);
//         // handle error
//     })
// }

// addTodo({
//     title: "this",
//     description: "mo betta"
// });

function getTodoById(id){
    axios.get(url + id )
        .then(function(response){
            console.log(response.data)
    })
    .catch(function(err){
        console.log(err);
    })
}

// getTodoById("5b24227eeec94d291400b4fc");

deleteTodoById = function(id){
    axios.delete(url + id )
        .then(function(response){
            console.log(response.data)
    })
    .catch(function(err){
        console.log(err);
    })
}

// deleteTodoById("5b24227eeec94d291400b4fc");


function editTodoById(id, editedTodo){
    axios.put(url + id, editedTodo)
    .then(function (response){
        console.log(response.data)
    })
    .catch(function (err){
        console.log(err);
    })
}

editTodoById("5b24227eeec94d291400b4fc", {completed: true, price: 3})