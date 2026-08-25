//types of functions

// 1. named function

// 2. parameterized funtion

// 3. anononymous function (a function without name)

// 4. arrow function

// 5. callback funtion -- (a function calls the another function)



console.log('js is started')

function username(name) {
    // comma seperator
    console.log("username name", name, "js");

    // concatenation
    console.log("username name " + name + " js");

    // template literals  --- use the backticks (``) beside of number 1
    console.log(`username name ${name} js`);

}

username('sadhik')

// anonymous fun
let hemanth = function () {
    console.log('anonymous fun')
}

hemanth()

// arrow function

let bhanu = (arrow) => {
    console.log('arrow fun', arrow)
}

bhanu("this is testing of arrow")

// callback 

function fun1() {

    fun2()

}

function fun2() {
    console.log("this is fun2")
}


fun1();


// forEach funtion ----

// syntax 

// arrayName.forEach( function(ele,index)   )


let arr1 = [11, 12, 13, 14];

// for(let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i], "ele", i, "index")
// }

// arr1.forEach((ele, index) => {

//     // ele ---- 11,12,13,14
//     // index --- 0,1,2,3,

//     console.log(ele," at ",index)


// })


let output = arr1.forEach((ele, index) => {

    // ele ---- 11,12,13,14
    // index --- 0,1,2,3,

    // console.log(ele, " at ", index)

    return ele

})

console.log(output, 'output')
// map

// return --- to store output in the variable

// diff b/w map and foreach is by using map i can create a new array but using foreach i can't


let result = arr1.map((ele, index) => {

    // ele ---- 11,12,13,14
    // index --- 0,1,2,3,

    // console.log(ele, " at ", index)

    if (ele > 12) {
        console.log(ele, 'ele in map')

        return ele

    }


    // console.log(filterdata,'fileterdata')
    // return filterdata

})


// let filterdata = arr1.filter( (ele,index) => {
//     return ele > 12
// } )

// filter will give the all the elements which satisfy the condition

let filterdata = arr1.filter((ele, index) => ele > 12)

console.log(filterdata, "in filter fun");


// if u want the filter only one element use find
let finddata = arr1.find((ele, index) => ele > 12)

console.log(finddata, "in find fun");


console.log("result", result)



console.log('js is ended')
