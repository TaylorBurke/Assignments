
var body = document.querySelector("body");
var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function () {
    if (this.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var jsData = JSON.parse(jsonData);
        var pokemonObjects = jsData.objects[0].pokemon;
        // loop through the pokemon array
    // 
        
        // make a p element
        var p = document.createElement("p");
        // set innerhtml of p element to pokemon's name
    //    
        console.log(pokemonObjects);
        for (i = 0; i < pokemonObjects.length; i ++)
        var pokemonNames = pokemonObjects[i].name;
        console.log(pokemonNames);
        p.innerHTML = pokemonNames;
        // append p to the body
        body.appendChild(p);
    }

}


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);


xhr.send();


