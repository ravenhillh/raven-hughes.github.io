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