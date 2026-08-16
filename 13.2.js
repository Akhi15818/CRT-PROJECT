let a = 'sk sadhik';

// str to array

let array = a.split('');

console.log(array)


let duplicates = array.filter((ele,index) => array.indexOf(ele) !== index)

console.log(duplicates,'dup')