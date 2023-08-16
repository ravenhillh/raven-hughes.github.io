// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //using a for loop to grab array values
  for (var i = 0; i < array.length; i ++){
    //logging values
    console.log(array[i])
  }
    
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //using a for loop to grab array values backwards
  for (var i = array.length -1; i >= 0; i --){
    //logging values
    console.log(array[i])
  }
    
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //creating an array variable to store object keys
  var array1 = []
    //using a for in loop to pull out keys
    for (var key in object){
      //pushing the keys into array variable
      array1.push(key)
    } return array1
      
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //use a for in loop to take the keys of an object 
  for (var key in object){
  //log each key to the console
    console.log(key)
  }
    
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //creating an array variable to store object values
  var array1 = []
    //using a for in loop to pull out keys
    for (var key in object){
      //pushing the keys into array variable
      array1.push(object[key])
    } return array1
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
    //using a for in loop to pull out keys
    for (var key in object){
      //logging values
      console.log(object[key])
    } 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //finding the number of properties in the object
  let count = Object.keys(object)
    //returning the number
  return count.length
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //change the objec to an array
  var array1 = []
    //using a for in loop to pull out keys
    for (var key in object){
      //pushing the keys into array variable
      array1.push(object[key])
      //looping through the array and logging values backwards
    } for (var i = array1.length -1; i >= 0; i--){
      console.log(array1[i])
    } 
    
    
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
