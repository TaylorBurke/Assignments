var axios = require("axios");

// GET POST PUT DELETE
var url = "https://api.vschool.io/ben/todo/";

function getTodos() {
    axios.get(url)
        .then(function (response) {
            console.log(response.data);
            // do stuff with the request as needed
        })
        .catch(function (err) {
            // handle the error as needed
        })
}

function addTodo(todoItem) {
    axios.post(url, todoItem)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

// addTodo({
//     title: "teach axios",
//     description: "this"
// });

function getTodoById(id) {
    axios.get(url + id)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}


function deleteTodoById(id) {
    axios.delete(url + id)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

function editTodoById(id, editedTodo) {
    axios.put(url + id, editedTodo)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

editTodoById("5b241fe0eec94d291400b4e3",{completed: true, price: 15000})