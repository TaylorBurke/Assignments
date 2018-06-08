var form = document.demoForm;

form.addEventListener("submit", function (e) {
    debugger;
    e.preventDefault();
    var output = {};
    output.name = this.name.value;
    output.name = this.name2.value;
    output.email = this.email.value;
    output.age = this.age.value;
    output.gender = this.gender.value;
    console.log(output);
})
    