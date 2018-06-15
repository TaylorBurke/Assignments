var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = {};
    if (form.diet.checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.diet.checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.diet.checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", formAlert);