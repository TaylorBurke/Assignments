// stringify data before saving locally
// parse data on the way in



// https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_session 

var count = 0;

document.querySelector("button").addEventListener("click", function(e){
    e.preventDefault();

    document.getElementById("textArea").innerHTML = count;
        count++;
})

