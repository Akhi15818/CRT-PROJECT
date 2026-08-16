let name = 'sadhik';
function getData() {
    showData()
}
function showData() {
    console.log(name)
}
getData()
/// 20.3

let array = [
    {
        id : 1,
        name : 'sadhik'
    },
    {
        id : 2,
        name : 'hemanth'
    },

]

let targetId = 2

let output = array.filter((ele,index) => ele.id == targetId)

console.log(output)

// 20.5

class Book {

    constructor(pages,author,type) {

        this.pages = pages
        this.author = author
        this.type = type
    }
    typeofbook() {
        console.log(this.pages,this.author,this.type)
    }
}

let mybook = new Book(100,'sadhik','thriller')

mybook.typeofbook()
