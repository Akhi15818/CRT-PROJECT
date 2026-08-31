console.log('this is excuted by node js compiler');

// we have some predefined keywords : h1 ----


// while taking the input from the user :

// var, let , const

// int a = 5

// alert('this is alert');

const a = "sadhik";

console.log(a, 'this is a variable')

let b = 5

var c = true

console.log(b, "b variable")

console.log(typeof c, 'c is boolean');

// what is null ? (i am storing blank space in the variable)

var d = null;

console.log(d, 'd variable');

// while creating variable u r doing 2 things

// 1. declaring the variable ---- giving name;
// 2. initialisation ----- giving value to variable


var f;

console.log(f, "f variable");


//2. non-primtive data types (this built by using primitive data types);


// 1. object ---- key - value pair which is used to represent realtime item

var car = {
    name: 'BMW',
    color: 'blue',
    year: 2025,
}

console.log(car, 'car variable');

console.log(car.color, 'name ')


// 2. array --- group of anything

var arr = [1, 2, 3]

var arr1 = ['sadhik', 'hemanth']

// arr1[1]

var arr2 = [true, false, true]

var arr3 = [

    {
        name: 'BMW',
        color: 'blue',
        year: 2025,

    },
    {
        name: 'Benz',
        color: 'blue',
        year: 2025,

    }

]

console.log(arr3[1].name)


// we can access the array by using indexing ----

console.log(arr1[1], 'arr')


// 3. function ---- block of code when we call this function then it will run the block of code,

// ----- repeated action

// syntax of function 

function funName() {
    console.log("this is a function")
}


funName()

// types of functions :

// 1. named function ---- 

// 2. arrow function

// 3. parameter function

// 4. callback fun

// 5. anonymous function

// 6. immediately awoked function

// 2. parameter fun

// const z = 5 + 6;

function add(a,b) {

    console.log("sum is ", a+b);

    // return is a keyword , you have to give the ouput in the return;

    // for output we use the return

    // let s = a+b;

    return a;
    
    // to store in the variable this return will be used

}

// console.log(s,'this s variable')

// return keyword :


const x = add(1,1);

console.log(x,"this is the output");

add(5,6);

add(10,20)
