console.log('js is started')


// this ---- it will represent the scope where it is created (it is contains the all the variables in that scope)

// block ---- {}

var a = 5

console.log(a)

console.log(this,'this')

var obj = {
    name : 'sadhik',
    age : 70,
    x : function () {
        console.log(name,"name in the obj");

        console.log(this.age,'this in obj')
    }
}


const ab = function() {
    console.log('this is anononymous function')
}

// 

ab()


obj.x()

// var obj = {
//     name : 'sadhik',
//     x :  function () {
//         console.log(name,"name in the obj")
//         console.log(this.name,'this in obj')
//     }
// }

// obj.x()



console.log('js is ended')
