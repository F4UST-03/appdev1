// == vs ===
let a = 5, b = "5";
console.log("==:", a == b);  // indicates the same value regardless of type
console.log("===:", a === b); // indicates both value and particularly, the type

// Undefined vs Null
let x, y = null;
console.log("x:", x, "y:", y);
console.log("x == y:", x == y); 
console.log("x === y:", x === y);

// Regular vs Arrow function
const obj = {
  name: "Jorilyn",
  regular() { console.log("Regular:", this.name); },
  arrow: () => console.log("Arrow:", this.name)
};
obj.regular(); // Jorilyn
obj.arrow();   // undefined

// Array copying
let arr1 = [1,2,3], arr2 = arr1; 
arr2.push(4);
console.log("Using =:", arr1, arr2); // both changed

let arr3 = [5,6,7], arr4 = [...arr3];
arr4.push(8);
console.log("Using spread:", arr3, arr4); // only arr4 changed
