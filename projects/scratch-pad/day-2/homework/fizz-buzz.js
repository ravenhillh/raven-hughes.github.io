// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//writing a for loop to count from 1 to 100
for (var i = 1; i < 101; i ++){
    //if number is a multiple of both three and five logging FizzBuzz    
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    //if a number is a multiple of three logging Fizz    
    } else if (i % 3 == 0){
        console.log("Fizz")
    //if number is a multiple of five logging Buzz    
    }else if  (i % 5 == 0){
        console.log("Buzz")
    //else just logging the number
    else console.log i;
}                

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}