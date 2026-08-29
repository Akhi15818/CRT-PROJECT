// 1.string ---- text

// properties  ---- it contains (non - actionable)

var str = "hello world";

console.log(str.length, "str length");


// functions ---- actions 

console.log(str.toUpperCase(), "str uppercase");

// str.toLowerCase();
console.log(str.trim(), "trim") // starting and ending spaces

console.log(str.includes("wold"), 'includes');

console.log(str.indexOf('l'), "first pos of l") // first occurence postion

console.log(str.lastIndexOf('l'), "last pos of l");

// console.log(str.substring(starting,ending))

console.log(str.substring(6, 11), 'substr'); // ending index will be exclude so add the +1

console.log(str.replace("world", 'sadhik'), "replace fun"); // if u want to replace only one use replace() , for all use replaceAll()

console.log(str.slice(6, 11), "slice fun");

console.log(str.split(''), 'split fun');// on basis of nothing, it become group of characters 
// [
// 'h', 'e', 'l', 'l',
//     'o', ' ', 'w', 'o',
//     'r', 'l', 'd'
// ]

console.log(str.split(' '), 'split fun'); // on basis of space, it become group of words ['hello','world']


console.log('sadhik' == " sadhik","equals");


// 2. number

var a = 20.1512

console.log(Math.round(a),'round');

console.log(Math.min(5,1),"min")

console.log(Math.max(5,1),"min")

console.log(a.toFixed(2),"to fixed funtions");

console.log(Math.random(),"it will give the value from 0 - 1")

console.log(Math.round(10 * Math.random()),"if i want 0 - 10")

// boolean 

// true --- 1

// false --- 0


// --------------------

// objs

const Car = {
    name : "benz",
    color : 'white',
    year : 2025
}

console.log(Object.keys(Car),"props")

console.log(Object.values(Car),"values")

// arrays 

let arr = ['sadhik','hemanth'];

// adding
arr.push("bhanu") // add the item into array in the ending
arr.unshift("first")// use the unshift to add the item in the startring


// delete

arr.pop() // last item removed

arr.shift() // first item removed

// splice is used to delete and add the items at specific index



// splice(starting index, how many elements to delete, elements to add )


const arr2 = ['bmw',"benz",'tata','rolls','nano']

// arr2.sort()

arr2.reverse();




// console.log(arr,"sanket")

// arr2.splice(1,2,"tesla")

console.log(arr2,"arr2")

const arr3 = [4,2,7,8,1,0];

// 0,1,2,3 --- 0-1 == -1

// arr3.sort()

arr3.sort((a,b) => a-b)

arr3.sort((a,b) => b-a) 


// arr3.reverse()


console.log(arr3,'arr3')
