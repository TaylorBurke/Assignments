number = 4;

function addUp(num) {

    let counter = 0;

    for (i = 0; i < num; i++) {

        counter += (i +1)

    }

    return counter

}

console.log(addUp(number));