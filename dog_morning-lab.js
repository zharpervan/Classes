// class Dog {
//     constructor (name, age = .5, color, breed) {
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//         this.color = color;
//     }
//     eat () {
//         console.log("I eat the food");
//     }
//     running () {
//         console.log("I dont wanna stop running");
//     }
//     barking () {
//         console.log("The dog says woof");
//     }
//     zooming () {
//         console.log("I am faster than the flash");
//     }
// }

// const corgi = new Dog ("Mr.Waddles", undefined, "brown", "corgista");
// console.log(`${corgi.name} is ${corgi.age} years old`)
// const huskie = new Dog ("jack", 2, "white", "huskerdu");
// const theBoss = new Dog ("the Boss", 13, "tri-color", "yorkie");
//^three instances of the dog class 

//make an object called vending machine?
//this object has an array of 3 snacks
//snacks are objects that have a name and price
//a vending machine has a function vend that allows user to enter the array position of snack and return snack
//call vendingMachine.vend() with a valid integer (in the parenthesis?)

class VendingMachine {
    constructor (vend, price) {
        this.vend = ["chips-ahoy", "popcorn", "cheezits"];
        this.price = [3.50, 2.00, 1.50];
    }
}
const orderOne = new VendingMachine ();
const orderTwo = new VendingMachine ();
const orderThree = new VendingMachine ();
console.log(`${orderOne.vend[0]} are ${orderOne.price[0]}`);
console.log(`${orderTwo.vend[1]} is ${orderTwo.price[1]}`);
console.log(`${orderThree.vend[2]} are ${orderThree.price[2]}`);

// let VendingMachine = {
//     vend: ["chips-ahoy", "popcorn", "cheez-its"]
// }
// console.log(VendingMachine.vend[0]);
// console.log(VendingMachine.vend[1]);
// console.log(VendingMachine.vend[1]);
