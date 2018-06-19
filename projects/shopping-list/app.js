// You should be able to delete items by clicking the [x]

var newItem = document.querySelector("input");
var form = document.querySelector("form");
   
var section = document.querySelector("section");

form.addEventListener("submit", function(e){
    e.preventDefault();
    var parent = document.createElement("div"); 
    var p = document.createElement("p");
    p.innerHTML = newItem.value; 
    var button = document.createElement("button");
    button.innerHTML = "&#x2713;";
    button.addEventListener("click", function(){
        section.removeChild(parent);
    })
    parent.appendChild(p);
    parent.appendChild(button);
    section.appendChild(parent);
})