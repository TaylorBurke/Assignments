// Blue when the mouse hovers over the square
// Red when the mouse button is held down over the square
// Yellow when the mouse button is let go over the square
// Green when the mouse is double clicked in the square
// Orange when the mouse scroll is used somewhere in the window (not just over the square).

var div = document.querySelector("div");

div.style.width = "110px";
div.style.height = "110px";
div.style.backgroundColor = "red";
div.style.border = "solid 3px black";


div.addEventListener("mouseover", function(){
    div.style.backgroundColor = "blue";
})

div.addEventListener("mouseout", function(){
    div.style.backgroundColor = "red";
})



document.info.addEventListener("submit", function(){
    var noun = this.noun.value
    var adverb = this.adverb.value
    var verb = this.verb.value
    
    alert('The ${noun} did ${adverb} ${verb}')
})





// var header = document.createElement("header");


// var body = document.querySelector("body");

// var title = document.createElement("h1");
// HTMLTitleElement.innerText

// var paragraph = document.createElement("p");
// HTMLParagraphElement.innerText

// var button = document.createElement("button");
// button.innerText = "Press Me"

// button.addEventListener("click", function(){
//     console.log("HEY!")
// });

// title.innerText = "Everything Was Beautiful and Nothing Hurt"
// paragraph.innerText = "lorem The DOM is the way the browser keeps track of where all of the elements are and how they relate to each other."


// header.appendChild(title);
// header.classList.add("wrapper")
// body.appendChild(header);
// body.appendChild(paragraph);
// body.appendChild(button);