// class Person {
//     constructor (name) {
//         this.name = nameParam;
//     }
// };

const firstPerson = new Person();

class Person {
    constructor (name, age) {
        this.name = nameParam; 
        this.age = ageParam;
    }
    getName () {
    return this.name; //<= getter
}
    setName (nameParam) {
        this.name = nameParam;
        // .setname makes it so that a specific element only interacts
    }
    greetPeople () {
        console.log(`Hello I am ${this.name}`)
    }
};

const firstPerson = new Person("Angel", 22);
firstPerson.setName("Anya");
// should be print hello my name is Anya
//This line replaces the value set in the const firstPerson
console.log()

class Superhero extends Person {
    constructor (name, age) {
        super (name, age); //super key word calls the parent constructor (person in this case)
        this.superpower = superpowerParam;
    }
    describePower() {
        console.log(`I am able to ${this.superpower}`);
    }
}
const spidey = new Superhero("Miles Morales", 16, "web swing");
console.log(spidey)
spidey.greetPeople();//shoud say hello I am undefine

//things labelled parameters are just elements you can change 

class Currency {
    constructor (weight) {
        this.weight = weight;
        //this refers specifically to the class we're in rn in this case its currency
    }
}

class AmericanDollar extends Currency {
    describeBill() {
        console.log(" I am a green rectangle");
    }
}

class GoldCoin extends Currency {
    describeCoin() {
        console.log("I was fought for and still am ")
    }
}

const bill = new AmericanDollar("1 gram");
console.log(bill.weight) // 1gram will console log 
