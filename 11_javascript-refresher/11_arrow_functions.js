// no parameters
const greet = () => "Hello!";
console.log(greet());

const square = () => 25;
console.log(square()); 

const sayHi = () => console.log("Hi!");
sayHi(); 


// one parameter
const greet1 = name => "Hello, " + name;
console.log(greet1("Jorilyn"));

const square1 = n => n * n;
console.log(square1(5));

const sayHi1 = message => console.log(message);
sayHi1("Hi!");


// implicit return
const greet2 = name => "Hello, " + name;
console.log(greet2("Jorilyn"));

const square2 = n => n * n;
console.log(square2(5)); 

const sayHi2 = () => "Hi!";
console.log(sayHi2());



