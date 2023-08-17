// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work? no
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //use isArray to test if value is array
    return Array.isArray(value)
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //use an if statement to test if the value is an object or not an object
    if (value instanceof Date === true){
        return false
    } else if (value === null){
        return false
    } else if (Array.isArray(value) === true){
        return false
    } else if (typeof value === 'object'){
        return true
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //write a condition statement to check if value is an array or object
     //use an if statement to test if the value is an object or not an object
     if (value instanceof Date === true){
        return false
     } else if (value === null){
        return false
     } else if (Array.isArray(value) === true){
        return true
    } else if (typeof value === 'object'){
        return true
    } 
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
     //use an if statement to test if the value is an object or not an object
     if (typeof value === 'string'){
        return "string"
    } else if (value === null){
        return "null"
    } else if (Array.isArray(value) === true){
        return 'array'
    } else if (value instanceof Date === true){
        return 'date'
    } else if (typeof value === 'object'){
        return 'object'
    } else if (typeof value === 'undefined'){
        return "undefined"
    } else if (typeof value === 'boolean'){
        return "boolean"
    } else if (typeof value === 'number'){
        return "number"
    } else if (typeof value === 'function'){
        return "function"
    // YOUR CODE ABOVE HERE //
}
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

