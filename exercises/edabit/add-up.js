// https://edabit.com/challenge/4gzDuDkompAqujpRi
// 

number = 4;

function addUp(num) {

    let counter = 0;

    for (i = 0; i < num; i++) {

        counter += (i +1);
        console.log(counter)

    }

    return counter

}

console.log(addUp(number));