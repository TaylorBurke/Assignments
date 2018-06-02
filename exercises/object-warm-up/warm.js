var coffee = {  
    color: "Black",
    temperature: "cold",
    price: "free",
    write: function() {
    console.log("Im " + this.color + " coffee that is " + this.price);
    }
}

var banana = {  
    color: "yellow",
    temperature: "cold",
    price: "free",
    write: function() {
    console.log("Im " + this.color + " banana that is " + this.price);
    }
}

var table = {  
    color: "beige",
    temperature: "cold",
    size: "large",
    write: function() {
    console.log("Im " + this.color + " table that is " + this.size);
    }
}

table.write();
