// hobbies using .map()
const hobbies = ["Dancing", "Watching Anime and Games", "Singing"];
hobbies.map(hobby => console.log("Hobby:", hobby));

// destructuring and spread operator
const student = { name: "Jorilyn", age: 20 };
const { name, age } = student;
console.log("Name:", name);
console.log("Age:", age);

const array = [1, 2, 3];
const new_array = [...array, 4, 5];
console.log("New Array:", new_array);
