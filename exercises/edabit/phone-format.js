// https://edabit.com/challenge/Z6oY6EWwT9rde8YXm


myNum = [9, 1, 8, 3, 6, 1, 2, 4, 4, 8];

function formatPhoneNumber(numbers) {
    numbers.splice(0, 0, '(');
    numbers.splice(4, 0, ') ');
    numbers.splice(8, 0, '-');

    return numbers.join('')
}

console.log(formatPhoneNumber(
    myNum
)
)