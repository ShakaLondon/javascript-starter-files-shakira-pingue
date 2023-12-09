// ****************************************************TASK 1****************************************************


const fruitArray = [ "papaya", "orange", "apple", "pear", "dragonfruit", "pineapple", "kiwi" ];

fruitArray.pop();
console.log( "Pop One: " + fruitArray );

fruitArray.pop();
console.log( "Pop Two: " + fruitArray );

fruitArray.pop();
console.log( "Pop Three: " + fruitArray );


// ****************************************************TASK 2****************************************************

const fruitNameArray = [ "papaya", "orange", "apple", "pear", "dragonfruit", "pineapple", "kiwi" ];

fruitNameArray.sort();
console.log( "Sort ascending: " + fruitNameArray );

fruitNameArray.sort().reverse();
console.log( "Sort descending: " + fruitNameArray );

const numberArray = [ 5, 325, 67, 1000000, 150 ];

numberArray.sort();
console.log( "Sort number: " + numberArray );










// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const peopleArray = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];


const nameSorter = ( people ) => {

  let sortedArray = [];
  let counter = 0

  peopleArray.sort((a, b) => {
    const ageDifference = a.age - b.age
    return a.age - b.age;
  })

  while ( counter < peopleArray.length ) {
    sortedArray.push(peopleArray[counter].name)
    counter++
  };

  console.log(sortedArray);
};

nameSorter(peopleArray);

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// function compare(a, b) {
//   return a.age - b.age;
// }
