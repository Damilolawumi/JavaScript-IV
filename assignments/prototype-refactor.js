
//Prototype Refactor

//1. Copy and paste your code or the solution from yesterday


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.stomach = [];
// }

// Person.prototype.greet = function () {
//   return this.name + " is " + this.age + " years old"
// }

// Person.prototype.eat = function (food) {
//   this.stomach.push(food)
// }

// Person.prototype.poop = function () {
//   this.stomach = []
// }


// let dammy = new Person("Damilola", 48);
// console.log(dammy.greet())
// dammy.eat("rice")

// console.log(dammy.stomach)

// dammy.poop();
// console.log(dammy.stomach)


// TASK 2

// - Build a Car constructor that takes model name and make.
// - Give cars the ability to drive a distance.
// - By driving a car, the distance driven should be added to an "odometer" property.
// - Give cars the ability to crash.
// - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
// - Give cars the ability to be repaired.
// - A repaired car can be driven again.

// function Car(name, make) {
//   this.name = name;
//   this.make = make;
//   this.odometer = 0;
//   this.crashed = false;
// }

// Car.prototype.drive = function (distance) {
//   if (this.crashed === true) {
//     return;
//   }
//   this.odometer = this.odometer + distance
// }

// Car.prototype.repair = function () {
//   this.crashed = false;
// }

// Car.prototype.crash = function () {
//   this.crashed = true;
//   return `I crashed at ${this.odometer} miles!`;
// }


// let picanto = new Car("Picanto", 'Kia');
// picanto.drive(40);

// console.log(picanto)
// picanto.drive(20);


// TASK 3

// - Build a Baby constructor that subclasses the Person built earlier.
// - Babies of course inherit the ability to greet, which can be strange.
// - Babies should have the ability to play, which persons don't.
// - By playing, a string is returned with some text of your choosing.

// function Baby(babyAttributes) {
//   Person.call(this, babyAttributes); // binding this to Person
// }
// Baby.prototype = Object.create(Person.prototype);
// Baby.prototype.play = function () {
//   return this.name + " is playing"
// }

// let baby = new Baby("Peter", 40)
// baby.play()
// TASK 4

// Use your imagination and come up with constructors that allow to build objects
// With amazing and original capabilities. Build 3 small ones, or a very
// complicated one with lots of state. Surprise us!


//   function Truck(truckAttributes) {
//     Car.call(this, truckAttributes); // binding this to Car;
//     this.load = 0
//   }
//   Truck.prototype = Object.create(Car.prototype);
//   Truck.prototype.carryLoad = function (bags) {
//     this.load = bags
//   } 



//2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
//TASK 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    greet = () => {
        return this.name + " is " + this.age + " years old"
    }
    eat = (food) => {
        this.stomach.push(food)
    }
    poop = (food) => {
        this.stomach.pop();
    }
}

const dammy = new Person("Damilola", 48);
let tobe = new Person('Tobechukwu',56)

let damigreeting = dammy.greet();
console.log(damigreeting)


//TASK 2
class Car {
    constructor(name, make) {
        this.name = name;
        this.make = make;
        this.odometer = 0;
        this.crashed = false;
    }

    drive = (distance) => {
        if (this.crashed === true) {
            return;
        }
        this.odometer = this.odometer + distance
    }

    repair = () => {
        this.crashed = false;
    }

    crash = () => {
        this.crashed = true;
        return `I crashed at ${this.odometer} miles!`;
    }

}


let picanto = new Car("Picanto", 'Kia');
picanto.drive(40);

console.log(picanto.odometer)
picanto.drive(20);
console.log(picanto.odometer)

//TASK 3

class Baby extends Person {
    constructor(name, age) {
        super(name, age)
    }

    play = () => {
        return this.name + " is playing"
    }

    cry = () => {
        return this.name + " is crying"
    }
}

let akin = new Baby ('akin', 3) 
console.log(akin.greet())

//TASK 4
class Truck extends Car {
    constructor(attributes) {
        super(attributes)
        this.load = 0
    }

    carryLoad = (bags) => {
        this.load = bags;
    }
}
