// scope in js

// scope ----  where the variables are accessible (borders, limits)

// 1. global scope

// 2. functional scope

// 3. block scope

// 4. lexical scope


console.log('js is started')


// 1. global scope --- without functional, blocks ({}) if the variable defined then it is limited to global scope

// this variable will be accessed by anyone

let a = 10

function username() {
    console.log(a, 'a in fun')
}

username();


if (true) {
    console.log(a, 'a in block')
}

// 2. functional scope ----- if u declare a variable in function, it is limited to that function only


function functionScope() {
     var b = 10

     console.log(b, 'b in function')
 }

 functionScope();

 //console.log(b, 'b in outside')

// // 3. block scope ----- if u declare a variable in block, it is limited to that block only


 if (true) {
   let c = 11
     console.log(c, 'c in block')

 }

//console.log(c, 'c in outside')

 function difference() {

     let x = 1



     if (true) {

        let s = 3
    

        console.log(x, "x")

     }


     console.log(s, 'print s')

 }


 //difference();

//  console.log(c, 'c in outside')


// // 4. lexical scope ----- if we have the nested functions ---- we can access the variable within that lexical scope


 function fun1() {


     const name = "sadhik"



     function fun2() {

         console.log(name, "name in fun2")

     }

     console.log(name, "name in fun1")


     fun2()


 }

 fun1()


// // ---------------------------

//  optional chaining


 let obj = {
    name : 'sadhik'
 }

 console.log(obj?.age,'age in the obj')

 const arr1 = [1,2,3]

 console.log(arr1?.[0],'first element')



// // var --- functional scope --- 

// // let and const ---- block scope

// // fun ---- 133 started , 152 ended

// // block --- 137 started , 145 ended

// function keywordTest() {

//     if (true) {

//         var e = 1;

//         let d = 2;

//         const f = 3

//     }

//     console.log(e, 'e ') // 1

//     // console.log(d, 'd ')

//     // console.log(f, 'f ')


// }



// keywordTest()













// console.log('js is ended')
