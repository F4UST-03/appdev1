// greet
function greet(name) {
    return `Hello ${name}!`;
}
console.log(greet('Jori'));

//square using arrow function
const square = number => number * number;
console.log(square(7));

// calculator
function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b,
    }
}
console.log(calculator(3, 5));


