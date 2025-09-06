// array
const numbers = [1, 2, 3];

// Clone the array
const numbers_clone = [...numbers];
console.log("Cloned array:", numbers_clone);

// Extend the array
const extended_numbers = [...numbers, 4, 5];
console.log("Extended array:", extended_numbers);


// object
const user = { name: "Jorilyn", age: 20 }; // replace with your name and age

// Clone the object
const user_clone = { ...user };
console.log("Cloned object:", user_clone);

// Extend the object
const updated_user = { ...user, city: "Manila" };
console.log("Extended object:", updated_user);


// Rest operator in function
function sum(...args) {
  const [a, b] = args;
  return a + b;
}

console.log(sum(2, 3)); 
