import greeting, { my_info } from "./15_modules_export.js";

console.log(greeting());
console.log(`My name is ${my_info.name}, I am ${my_info.age} years old, and I take ${my_info.course}.`);
