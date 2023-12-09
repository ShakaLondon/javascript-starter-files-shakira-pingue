// Use this randomNumber inside of the while/for loops to generate a random number
const randomNumber = Math.round(Math.random() * 10);

// ****************************************************TASK 1****************************************************

let counter = 0

while ( counter <= 10 ) {
    const randomNumberWhile = Math.round(Math.random() * 10);
    console.log(`Random number ${counter}:` + randomNumberWhile);
    counter = counter +1;   
};

for ( i = 0; i < 11; i++ ) {
    const randomNumberFor = Math.round(Math.random() * 10);
    console.log(`Random number ${i}:` + randomNumberFor);
}


// ****************************************************TASK 2****************************************************











