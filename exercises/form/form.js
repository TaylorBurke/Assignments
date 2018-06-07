var form = document.demoForm;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var output = {};
    output.name = this.name.value;
    output.email = this.email.value;
    output.password = this.password.value;
    console.log(output);
})
    