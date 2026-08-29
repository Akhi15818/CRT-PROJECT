// 1. arithmetic operators (+,-,/,*,%)

// 2. assignment operators (=, +=,-=,,/=,*=)

// 3. comparision operators(==,===,!=,>=,<=)

// 4. logical operators (and(&&),or(||), ! (not))

// 5. ternary operator ()


// 6. bitwise operators


// 2. assignment opeatores (u r assigning some value)

let a = 5;

a = a + 1 // is equal to  a += 1 // 6

a += 1 // 7

a -= 1 // 6

console.log(a, 'a ')

// 3. comparision operators


const c = 5

const d = 6

// = (one equal only we are do assigning)

console.log(c == d, '==') // comparing the value but not the data type

console.log(c === d, '===') // comparing the value and the data type


console.log(5 != 6, 'not equal')

console.log(5 >= 5, 'greater than or equal to')

// 4. logical operators (and(&&),or(||), ! (not))


// for and opeators (if both are true then output is true, if one is false then o/p is false)

console.log((true) && (true));

let age = 19

console.log((age > 18) && (20 > age) && (5 < 1), 'op')

// or operator ---- || ---- if one condition is true --- then op is true

console.log((age > 18) || (1 > age), 'or operator')


// not operator --- opposite of boolean

console.log(!false, 'not')

// 5. ternary operator --- if else

// (cond) ? if block : else block

const z = (20 > 18) ? 'vote' : 'not to vote';

console.log(z,'z')

// 7. bitwise opearator

// and ( &), or (|)

const x = 2; // 10

let y = 3 // 11

console.log(x & y,"bitwise and" )


/// if else

// if(condition) {
//     code
// } else {
//     code
// }

// (condition) ? if block code : else block code

// let is18 = (19>18) ? 'vote' : 'not to vote';

// console.log(is18,"is18")

// comparing the values via binary

let num1 = 3 // 011

let num2 = 4 // 100

console.log( num1 & num2,'bitwise and')
