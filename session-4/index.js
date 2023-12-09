// ****************************************************TASK 1 - OBJECTS****************************************************

let personA = {
    name: 'Kaya',
    age: 15,
    location: 'London',
    likes: 'Cheese'
};

let personB = {
    name: 'Shakira',
    age: 28,
    location: 'Brixton',
    likes: 'Bread'
};

let personC = {
    name: 'Kiara',
    age: 3,
    location: 'Southampton',
    likes: 'Sweets'
};

let personD = {
    name: 'Christina',
    age: 98,
    location: 'Wallington',
    likes: 'Movies'
};

const biography = ( person ) => {
    `Hi, my name is ${person.name}. I am ${person.age} year's old, I live in ${person.location}, and I like ${person.likes}.`
}

console.log( biography(personA) );
console.log( biography(personB) );
console.log( biography(personC) );
console.log( biography(personD) );



// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("Division: x + y " + division);

const moreThan = x > y;

console.log("More than: y > x " + moreThan);

const lessThan = y < x;

console.log("Less than: y > x " + lessThan);

const modulus = x % y;

console.log("Modulus: x % y " + modulus);

const exponentiation = x ** y;

console.log("Exponentiation: x ** y " + exponentiation);

let a = x;

const increment = a++;

console.log("Increment: x ++ " + increment);

const decrement = a--;

console.log("Decrement: x -- " + decrement);


// ****************************************************TASK 3****************************************************

const age = 28;
const miniimumDrivingAge = 17;

console.log( "Am I old enough to drive? " + ( age > miniimumDrivingAge ));

// ****************************************************HOMEWORK****************************************************


const add = ( numberOne, nummberTwo ) => {
    numberOne + nummberTwo;
}

const subtract = ( numberOne, nummberTwo ) => {
    numberOne - nummberTwo;
}

const multiply = ( numberOne, nummberTwo ) => {
    numberOne * nummberTwo;
}

const divide = ( numberOne, nummberTwo ) => {
    numberOne * nummberTwo;
}

const calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
};

const whoIsOlder = ( personOne, personTwo ) => {
    const ageDifference = ( personOne.age > personTwo.age ) > 0 ? personOne.age - personTwo.age : personTwo.age - personOne.age;
    const oldestName = ( personOne.age > personTwo.age ) > 0 ? personOne.name : personTwo.name;
    const youngestName = ( personOne.age > personTwo.age ) > 0 ? personTwo.name : personOne.name;

    return `${oldestName} is ${ageDifference} years older than ${youngestName}`;
}

console.log( whoIsOlder( personA, personC ) );

console.log( whoIsOlder( personC, personA ) );

console.log( whoIsOlder( personC, personC ) );









