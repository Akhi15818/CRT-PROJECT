// regular expression ---- /pattern/

// validate the phone number ---- entered user --- 
// 1. no of digits -- 10, --- arr.lenght
// 2. start from 9,8,7,6 --- arr[0] === 9 || 8 || 7 || 6


let regex = /^\+?[1-9][0-9]{7,14}$/

let pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

// console.log(regex.test("9876543210"))

console.log(pass.test('Sadhik'))
