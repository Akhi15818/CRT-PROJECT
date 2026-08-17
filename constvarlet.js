// function declaration ---- creating the function
function name(a,b) {

    // console.log --- used to show something for ourselves
    console.log('hi sadhik');

    // output --- to store in the variable
    return a+b;
}

// fun call

const output = name(1,2); // a+b ===> 3


console.log(output,'output');
// ----------------------

// diff b/w var, let , const, function ---- keywords (it has some reserved task in js)

// var let const, 

// 1. var ----- initialisation (assigning value), updation, redeclare

var a = 5; // in this step we are doing declaration and initialization

console.log(a,"a variable");

a = 10; // without using the keyword, if u assign , then it is updation

console.log(a,"a updated");

// if u want u can redeclare ----


var a = 15; // with using the keyword, if u assign , then it is redeclare

console.log(a,"a redeclare (recreating the variable) ");

// 2. let ----- initialisation (assigning value), updation,

let b = 2;

console.log(b,'b declaration')

b = 3 ;

console.log(b,'b updation')

// let b = 4;

// console.log(b,'b redeclare');


// js is case sensitive 

// let sum = 1+3; // 4

// let Sum = 10+30; // 40


// 3.. const ----- initialisation (assigning value)

const pi = 3.14;

console.log(pi,"pi declare")

// pi = 10;

// console.log(pi,"pi updation");

// const pi = 15;

// console.log(pi,"pi redeclare");

let str = 'sadhik shaik'

console.log(str.slice(7,12),'slice');

console.log("shaik" + "sadhik"); // adding the strings known as cancatenation



// implicit coersion --- js will automatically (without user involment) change the data type


let op = 2 + "2" ;

console.log(op,typeof op); // 22

const res = 2+2; 

const strOp = "sadhik" + "sadhik"

console.log("2" + 2);

console.log('2' - 2,"sub")

console.log('sadhik' - 2,"sub in string") // NAN -- not an number 


console.log("sadhik" * 2 , "mul");

// BODMAS --- bracket, division, mul, addition, sub

console.log(89 - '90' / 2,'bodmas');

// basically --- js follows the operations

// + ==> 1. concatenation (adding the strings) 2. addition (add the numbers) 

// -  ==> numbers

// / ===> num

// * ==> num


// manually change the data type --- explicit coersion

console.log(Number("2") + 2,'explicit')

console.log("2" + String(2),"explicit");

// explicit used for to avoid nan errors

console.log("sadhik" * 2 , "mul");
