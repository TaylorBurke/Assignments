localStorage.setItem("myAge", 30);

var myFavePlace = {
    name: "Capitol Reef Ntl Park",
    location: "Souther Utah"

}

localStorage.setItem("myFavePlace", JSON.stringify(myFavePlace));
localStorage.setItem("primes", JSON.stringify([2, 3, 5, 7, 11]));

var myAge = localStorage.getItem("myAge");
console.log(myAge)

var myFavePlace = localStorage.getItem("myFavePlace");
console.log(myFavePlace);

var primesStored = localStorage.getItem("primes");
console.log(JSON.parse (primesStored));