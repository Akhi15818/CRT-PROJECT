// class ---- blueprint (example : blueprint of the house) --- what to do 

// while creating the class , name should be capital
// class Car {



// }


// functions --- 1000


// collections of functions --- class --- math, person, students


// collections of class ---- package 


class Car {

    // constructor is a special function which is called when the class obj is created
    constructor(name,year) {

        this.carname = name

        this.year = year

    }

    // function in the class known as method

    setthevariables(name, year) {

        this.carname = name

        this.year = year

    }


    info() {

        console.log(this.carname, 'name of the car')

        console.log(this.year, 'year')

    }

    drive() {
        console.log(this.carname, 'drive')
    }


}

// object creation of the Class

// object ---- function call

// object is a instance of the class,


let myCar = new Car('tata',2022) // class call --- object creation
// myCar.setthevariables('tesla', 2020)
// myCar.info()
// myCar.setthevariables('bmw', 2022)
myCar.info()
// myCar.drive()
console.log(myCar.carname, 'name') // accessing the variables
