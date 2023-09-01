'use strict';

// YOU KNOW WHAT TO DO //
/**
 * Identity: Designed to receive a value and return it unchanged
 * 
 * @param {Value} : The value that will be returned
 */
_.identity = function(value){
    return value
}
module.exports.identity = identity

/**
 * typeOf: Designed to receive a value and return a string of what the data type is.
 *
 * @param {Value} : The value that will be tested for what type of data it is.
 */
_.typeOf = function(value){
    if (typeof value === 'string'){
        return "string"
    } else if (value === null){
        return "null"
    } else if (Array.isArray(value) === true){
        return 'array'
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
    }
}
module.exports.typeOf = typeOf

/**
 * first: Designed to receive an array and a number, and return the first however many items from the array equal to the input number.
 * 
 * @param {Array} : The array that the items will come from.
 * @param {Number}: The number that designated how many items to return from the array.
 */
_.first = function(array, number){
    //check if the array is an array
    if (Array.isArray(array) === false){
      return []   
      //check if the number is a number
    } else if (number === -1){
        return []
    } else if (typeof number !== 'number'){
        return array[0]
        //return the first <number> of variables using input number
    } else {
            return array.slice(0, number)
     }
    
} 
module.exports.first = first
/**
 * last: Designed to receive an array and a number, and return the last however many items from the array equal to the input number.
 * 
 * @param {Array} : The array that the items will come from.
 * @param {Number}: The number that designated how many items to return from the array.
 */
_.last = function (array, number){
    //check if array
    if (Array.isArray(array) === false){
        return [] 
        //check if number
    } else if (typeof number !== 'number'){
        return array.pop()
        //return the last <number> of items in array using input var
    } else if(number > array.length){
        return array
    } else {
        return array.slice(array.length - number)
       } 
        
}
module.exports.last = last
/**
 * indexOf: Designed to loop over a collection, Array or Object, and return the index that is
 * the first occurance of the input value.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Value} value: The value to search for in the collection and
 * return the index of. 
 */

 _.indexOf = function(array, value){
//write a loop to check if value is on array
for (var i = 0; i < array.length; i ++){
    if(array[i] === value){
        return i
    } 
} return -1
    
} 
module.exports.indexOf = indexOf
/*
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * map: function takes in a collection and callback function. It returns a new array of the result of invoking the
 * callback on each item in the collection.
 * 
 * @param {Array or Object} collection: Function takes in an aray or an object as a collection.
 * @param {Function} func: Function takes in a callback function.
 * @returns {Array}: Function returns a new array populated by the results of invoking the callback.
 * 
 */
_.map = function(collection, func){
    //let func = function(num){ return num * 10} // num = 2 => 20
    var nuArray1 = []
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i ++){
            //collection[i] => current
            nuArray1.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection){
            nuArray1.push(func(collection[key], key, collection))
        }
    }return nuArray1
}

module.exports.map = map;