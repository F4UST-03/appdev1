// Object destructuring
const person = {
  name: "Jorilyn",
  age: 21 
};

const { name, age } = person; // extract values
console.log("Name:", name);
console.log("Age:", age);

// Array destructuring
const hobbies = ["dancing", "singing"]; 
const [firstHobby, secondHobby] = hobbies; 
console.log("First Hobby:", firstHobby);
console.log("Second Hobby:", secondHobby);

// Destructuring in function parameters
function printName(person) {
  console.log(person.name);
}

printName(person);
