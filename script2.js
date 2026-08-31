// 1. const and let
const pi = 3.14;   // cannot be changed
let count = 5;     // can be updated
count++;
console.log("pi:", pi, "count:", count);

// 2. Arrow function
const square = (n) => n * n;
console.log("Square of 4:", square(4));

// 3. Class
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    return `${this.name} is ${this.age} years old`;
  }
}
let s1 = new Student("Akhila", 20);
console.log(s1.show());

// 4. Spread and Rest operators
let nums = [1, 2, 3];
let moreNums = [...nums, 4, 5];   // spread
console.log("Spread:", moreNums);

function sum(...values) {          // rest
  return values.reduce((a, b) => a + b, 0);
}
console.log("Rest Sum:", sum(10, 20, 30));

// 5. Array helper functions
let arr = [5, 12, 8, 130, 44];

arr.forEach(n => console.log("forEach:", n));

let squares = arr.map(n => n * n);
console.log("map:", squares);

let filtered = arr.filter(n => n > 20);
console.log("filter:", filtered);

let hasSmall = arr.some(n => n < 10);
console.log("some <10:", hasSmall);

let allBig = arr.every(n => n > 3);
console.log("every >3:", allBig);
