// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

const a = 5;
const b = 10;
var c = a + b;

console.log('Original output: ' + c);

a = 20;

console.log("After 'a' has been updated: " + c);

c = a + b;

console.log("After 'a' has been updated to use the new 'a' value: " + c);


// You can see where this file is connected to your HTML in the index.html on line 14
const helloEveryOne = 'Hello Everyone!';
const howAreYou = 'Hey' + 'how are you?';
const description = 'description';
const descriptionID = '#description';
const aboutClass = '.about';


console.log(helloEveryOne);
console.log(howAreYou);
console.log(document.getElementById(description).innerHTML);
console.log(document.querySelector(descriptionID).innerHTML);
console.log(document.querySelectorAll(aboutClass)[0].innerHTML);
console.log(document.querySelectorAll(aboutClass));

function sayHey() {
    console.log('Heyyy!')
}

function conversation() {
    sayHey();
    console.log('How are you?');
    console.log('Goodbye');
}

conversation()

function futureAge( name, age ) {
    const plus5 = age + 5
    console.log(`Hi ${name}! You will be ${plus5} years old in 5 years.`)
}

futureAge( 'shakira', 28 )

const futureAgeArrow = ( name, age ) => {
    const plus5 = age + 5
    console.log(`Hi ${name}! You will be ${plus5} years old in 5 years.`)
}

futureAgeArrow( 'shakira', 28 )