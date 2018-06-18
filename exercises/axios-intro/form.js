// get needed elements and store as variables
var section = document.querySelector("section");
var form = document.querySelector("form");

// I have an array of objects in a database
// need to get them out and onto the page

var url = "https://api.vschool.io/taylor/todo";

var displayTodo = function(){
    // convert data into html elements
    var todos = response.data;
    todos.forEach(function(todo){

            //make header
            var wrapper = document.createElement("div");
            var h3 = document.createElement("h3");
            h3.innerHTML = todo.title;

            // make content
            var descP = document.createElement("p");
            descP.innerHTML = todo.description;

            // make price
            var priceP = document.createElement("p");
            priceP.innerHTML = todo.price;

            // make cehckbox
            var label = document.createElement("label");
            label.innerHTML = "Completed";

            //create input
            var input = document.createElement("input");
            input.type = "checkbox";
            label.appendChild(input);

            //append elements to wrapper
            wrapper.appendChild(h3);
            wrapper.appendChild(descP);
            wrapper.appendChild(priceP);
            wrapper.appendChild(label);

            //append wrapper to section
            section.appendChild(wrapper);

    })

    console.log(todos);
    // append them to the page
}

axios.get(url)
    .then(function(response){
        var todos = response.data
        console.log(todos);
        todos.forEach(displayTodo);
    })

    .catch(function(err){
        console.log(err);
    })

    form.addEventListener("submit", function(e){
        // store input values in object
        // POST the todo data using axios
        // call displayTodo function with response data
    })