var header = document.createElement("header");


var body = document.querySelector("body");

var title = document.createElement("h1");
HTMLTitleElement.innerText

var paragraph = document.createElement("p");
HTMLParagraphElement.innerText

var button = document.createElement("button");
button.innerText = "Press Me"

button.addEventListener("click", function(){
    console.log("HEY!")
});

title.innerText = "Everything Was Beautiful and Nothing Hurt"
paragraph.innerText = "lorem The DOM is the way the browser keeps track of where all of the elements are and how they relate to each other."


header.appendChild(title);
header.classList.add("wrapper")
body.appendChild(header);
body.appendChild(paragraph);
body.appendChild(button);