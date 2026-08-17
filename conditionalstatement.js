// without initialisation, it through the error
// const a ; 

// conditional statements --- if else, else if ; ()


// syntax : 

// if(condition --- if this condition is true then only inner block runs) {
//     // inner code
// }


let age = 10

// if block won't run then else block will run automatically

if (age > 18) {
    console.log("you are eligible to vote")
}

else if (age == 18) {
    console.log("it is right time to vote, u r good to go")
}

// above  conditions not satify the condition else execute finally
else {
    console.log("you are not eligible to vote")
}


let number = 10;

let divisor = 0;



if (number % divisor == 0) {

    console.log(number, "is factor of ", divisor)

}

else {

    try {
        if (divisor == 0) {
            throw new Error('the user used the divisor has 0 , which is invalid')
        }
    }
    catch (e) {
        console.log("we got the error", e.message)
    }
    console.log(number, "is not factor of ", divisor)
}


try {

    let result = 10/0;



    console.log(result,"result")
 } catch {
    console.log("we got the error")
 }


 try {

//     // in the try block i will write the code which is able to throw the error
     console.log(hemanth)

 } catch (e) {

//     // we will write the code , what to do when error occurs
   console.log(e.message,"error")
 }


// console.log(hemanth)

// ternary operator

// syntax

// (condition) ? (if block code) : (else block code)

// let is18 = (age>18) ? true : false

(age>18) ? console.log('greater than 18') : console.log("less than 18")

// console.log(is18,"ternary")

// switch ---- it is  like if - else

// switch(condition) {
//     case 1 : 
//         // code here

//     case 2 : 

//         // code here

//     default : 

//         // it is like else condition , it will run finally if others not excuted

    
// }

let day = 10;

switch(day) {
    case 1 :
        console.log("it is monday")
        // if we won't use the break it will run the bottom code also
        break;

    case 2 : 
        console.log("it is tuesday")
        break;

    default : 
        console.log("it is not valid input")
        break;
}



// loops ----- 


console.log("end of the js")
