// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
let createGreaterThanFilter = function(base) {
    // YOUR CODE BELOW HERE //

    //returning a function that tests whether a given value is greater than the base
    return function(value){
        //checking if value is greater than the base
        if (value > base) {
            return true
        } else return false
        
    } 

    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //returning a function that tests whether a given value is greater than the base
    return function(value){
        //checking if value is less than the base
        if (value < base){
            return true
        } else return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter (startsWith) {
    // YOUR CODE BELOW HERE //
//returning a function that tests whether a given string starts with the startsWith parameter
    return function(string){
        //test if string element 0 equals startsWith character
        if (string[0].toUpperCase() === startsWith.toUpperCase()) {
            return true
    } else return false 
}
}   /** 
* Given a endsWith character, which will be a single character, return a 
* Function that tests whether a given String ends with the endsWith 
* character.
*/
function createEndsWithFilter (endsWith) {
   // YOUR CODE BELOW HERE //
   //creating a function to compare endsWith to the last value of a string
   return function(string){
    //test if string element 0 equals startsWith character
    if (string[string.length -1].toUpperCase() === endsWith.toUpperCase()) {
        return true
} else return false
}
   // YOUR CODE ABOVE HERE //
}
    // YOUR CODE ABOVE HERE //

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
// create a storage variable for new strings
  let newStrings = []
    //create a loop to pull string data into an array or object and modify
  for (var i = 0; i < strings.length; i ++){
    newStrings.push(modify(strings[i]))
  } return newStrings
    

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
//write a loop to go through the string array
//create a true variable
let truFact = true
for (var i = 0; i < strings.length; i ++){
// use a conditional to test them with the test function parameter
    
if (test(strings[i]) === false ) {
    return false
    }    else if (test(strings[i]) === true ){
  truFact = true
    } 
    // YOUR CODE ABOVE HERE //
}return truFact
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
       }   
