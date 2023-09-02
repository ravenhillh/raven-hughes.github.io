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

/**
 * contains: Designed to test an array for a value, using a ternary operator
 * and return a boolean value.
 * 
 * @param {Array} collection: The collection to check in for a value.
 * @param {Value} value: The value to search for in the collection and
 * return a boolean value for. 
 */
.contains = function(array, value){
    return array.includes(value) ? true : false
}
module.exports.contains = contains

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
 * unique: Takes in an array and returns a new array with the duplicates
 * removed, using the .indexOf function
 * 
 * @param {Array} collection: The collection to go through and return values with
 * duplicates removed.
 * 
 */
_.unique = function(array){
    var newArr = []
    //loop thru array to test if array values exist on new array var
    for (var i = 0; i < array.length; i ++){
    //if they don't exist push them on
        if(newArr.indexOf(array[i]) === -1){
            newArr.push(array[i])
        }
    } return newArr
    }
module.exports.unique = unique
/**
 * filter: Designed to take in an array and a function, and pass each element from the array
 * into the function and return an array with the elements for which calling the function returned true.
 * 
 * @param {Array} collection: The collection to go through and return values.
 * @param {Function} func: Function takes in a callback function.
 * @returns {Array}: Function returns a new array populated by the values which returned true when passed to the function.
 */
_.filter = function(array, func){
    var aRay = []

    
    for (let i = 0; i < array.length; i ++){
            //collection[i] => current
        if (func(array[i], i, array) === true){
            aRay.push(array[i])
            };
        }
     
    
    return aRay
}
module.exports.filter = filter 
/**
 * reject: Designed to take in an array and a function, and pass each element from the array
 * into the function and return an array with the elements for which calling the function returned false.
 * 
 * @param {Array} collection: The collection to go through and return values.
 * @param {Function} func: Function takes in a callback function.
 * @returns {Array}: Function returns a new array populated by the values which returned false when passed to the function.
 */
.reject = function(array, func){
    var aRay2 = []

    
    for (let i = 0; i < array.length; i ++){
            //collection[i] => current
        if (func(array[i], i, array) === false){
            aRay2.push(array[i])
            };
        }
     
    
    return aRay2
}
module.exports.reject = reject 
 
/**
 * partition: function takes in an array and callback function. It returns a new array, with two subarrays, one containing values for which the 
 * function returned something truthy, and one for values that were falsy
 * 
 * @param {Array or Object} collection: Function takes in an array as a collection.
 * @param {Function} func: Function takes in a callback function.
 * @returns {Array}: Function returns a new array with two subarrays.
 * 
 */
_.partition = function(array, func){
    var aRay3 = [[], []]

    
    for (let i = 0; i < array.length; i ++){
            //push them to truth array
        if (func(array[i], i, array) == true){
             aRay3[0].push(array[i])
        } else if (func(array[i], i, array) == false) {
            aRay3[1].push(array[i])
        }
    } return aRay3
}

module.exports.partition = partition; 
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

/**
 * pluck: function takes in an array of objects and a property, and returns an array of each value at the given 
 * property, using the .map function.
 * 
 * @param {Array} collection: Function takes in an array and finds the values on each object in the array.
 * @param {Property} value: Checks at this property for each element.
 * @returns {Array}: Function returns a new array populated by values at the given property for each element.
 * 
 */
_.pluck = function (array, property){
    //create a new array to return the values
    var newArray = _.map(array, function(value){
        return value[property];
        
    });
    return newArray
    
} 
module.exports.pluck = pluck;
/**
 * every: function takes in a collection and a function and passes each item to the function,
 * and returns true if all elements passed to the function resolved to true and false if just one returned false
 * 
 * @param {Array} collection: Function takes in a collection and loops thru each item.
 * @param {Function} action: function checks each item and returns a boolean.
 * @returns {boolean}: function returns a boolean value.
 * 
 */
_.every = function (collection, func){
    //no function is passed in
    if (func === undefined){
        for (let i = 0; i < collection.length; i ++){
            // if the items are truthy
            if (collection[i] == true) {
                return true
            } else return false
        }   
          //if an array is passed in
     } else if (Array.isArray(collection)){
        let isFalse = true
        //loop thru array
        for (let i = 0; i < collection.length; i ++){
            //if the function returns a false value
            if (func(collection[i], i, collection) === false){
                isFalse = false
            } 

        } return isFalse 
        //if an object is passed in
     } else if (typeof collection === 'object'){
        let isFalse2 = true
        for (var key in collection){
            // check if the function returns a false value
            if (func(collection[key], key, collection) === false){
                isFalse2 = false
        }  
     } return isFalse2
}
}
module.exports.every = every;
/**
 * some: function takes in a collection and a function and passes each item to the function,
 * and returns true if at least one element passed to the function resolved to true and false if all returned false
 * 
 * @param {Array} collection: Function takes in a collection and loops thru each item.
 * @param {Function} action: function checks each item and returns a boolean.
 * @returns {boolean}: function returns a boolean value.
 * 
 */
_.some = function (collection, func){
    //when the function is not passed a callback
    if (func === undefined){
        for (let i = 0; i < collection.length; i ++){
            // if the items are truthy
            if (collection[i] == true) {
                return true
            } else return false
        }   
        // if the collection is an array  
     } else if (Array.isArray(collection)){
        let isTrue = false
        //loop thru array to check boolean
        for (let i = 0; i < collection.length; i ++){
           // check if the value returned is true
            if (func(collection[i], i, collection) === true){
                isTrue = true
                //if not return false
            } 
        } return isTrue
        //if the collection is an object
     } else if (typeof collection === 'object'){
        let isTrue2 = false
        //loop thru the object
        for (var key in collection){
            //check if the function returns true
            if (func(collection[key], key, collection) === true){
                isTrue2 = true
        } 
} return isTrue2
}
} 
module.exports.some = some;
/**
 * reduce: function takes in an array, a function and a seed, it passes each element from the array into the function
 * and uses the return value as previous result for the next iteration, uses seed as the first input as the previous result.
 * 
 * 
 * @param {Array} collection: Function takes in an array and loops thru each item.
 * @param {Function} action: function checks each item, comparing the current value with the previous.
 * @returns {value}: function returns a value from the final function call.
 * 
 */
_.reduce = function (array, func, seed){
    let output;
    //determine if seed is undefines
    if(seed === undefined){
        output = array[0];
        for (let i = 1; i < array.length; i ++){
            output = func(output, array[i], i)
        }
    } else {
         output = seed
         for (let i = 0; i < array.length; i ++){
            output = func(output, array[i], i)
         }
    }
       return output
 };
 module.exports.reduce = reduce