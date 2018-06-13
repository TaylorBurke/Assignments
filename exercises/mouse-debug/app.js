var mouse = {x: 0, y: 0};

document.addEventListener("mousemove", (event)=>{

    if(event.y > 300){
        mouse.y = 300;
    } else {
        mouse.y = event.y;
    }

    if (event.y < 100) {
        mouse.y = 100;
    } 
    
    if(event.x > 300){
        mouse.x = 300;
    } else {
        mouse.x = event.x;
    }

    if (event.x < 100){
        mouse.x = 100;
    }

    document.getElementById("number").innerHTML = "x: " + mouse.x + "<br>y: " + mouse.y

});
