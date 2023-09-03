/**
 * 
 * DATA-TYPES: 
 * 
 * 0. Data types are the different ways that data are stored and behave in Javascript. There are two different overarching
 * categories, primitive data types and complex data types. Javascript is a dynamic language and it has dynamic types, which means
 * a variable is not connected with one specific type and it can be reassigned to different types. Javascript is also a weakly typed language,
 * which means you can include two different data types in a variable and it will change them to match types.
 * 
 * 1. Number is a primitive data types that holds positive and negative numbers, as well as decimals.
 * 
 * 2. String is a primitive data type, which holds text. It must be wrapped in quotes, and each position in a string occupies an index.
 * Strings are immutable, so they must be copied or reassigned to modify the value.
 * 
 * 3. Boolean is a primitive value and have a value of either true or false, they are often used in conditionals.
 * 
 * 4. Null is an intential absence of an object value. It is a primitive data type and resolves to falsy.
 * 
 * 5. Undefined is primitive date type, it's used to represent a variable that has not been defined and resolves to falsy.
 * 
 * 6. NaN is a global property representing not-a-number. It is usually returned when a math expression resolves to something that is
 * not a real number.
 * 
 * 7. Infinity and negative infinity are global properties with a numberic value representing infinity. The value infinity is larger than
 * any other value.
 * 
 * 8. Array is  a complex data type, it is a zero indexed list. Arrays can contain any primitive or complex data, each value separated by a comma.
 * Arrays are technically also objects.
 * 
 * 9. Object is a complex data type. Objects are collections of key-value pairs, called properties. Each property has a key, and a value, which can
 * be any data type, including another object or an array. objects are mutable.
 * 
 * 10. Functions are a complex data type. They are technically objects, with the ability that you can call them. They are sometimes named,
 * but always defined with a code block wrapped in curly braces. A function is a piece of code designed to perform a task.
 * 
 * 11. Primitive data types are simple and they usually just inclue one value per variable. Complex data structures are built with primitive data
 * types, such as strings and numbers. Primitive values are copy by value, and complex values are copy by reference. Copy by value means
 * a copy of the actual value is made, whereas with complex data it is copied by reference meaning the copy is pointing at place in the
 * memory where the data is located, and both the original and copied to variable are pointing at the same place in memory.
 */

//Number
var num = 7;
console.log(num);  // prints 7 to the console

//String
var dude = "Raven";
console.log(dude); // prints Raven to the console

//Boolean
let isGreen = true;
console.log(isGreen); // prints true to the console

//Null
let bob = null;
console.log(typeof bob) // prints object to the console

//Undefined
let myFriend;
console.log(myFriend) // prints undefined to the console

//NaN
let num1 = null + 1
console.log(num1) // prints NaN to the console

//Infinity and Negative Infinity
let negNum = Math.log(0)
console.log(negNum) //prints -Infinity to the console

//Array
let myArray = [3, 5]
console.log(myArray) // prints to the console [3, 5]

//Object
let myDad = {age: 63}
console.log(myDad) // prints to the console [age: 63]

//Function
function hello(){
    console.log("Hi friend")
}
hello() // prints to the console Hi friend

//Primitive vs. Comple/Copy by value vs Copy by reference
let ages = 20
let wheel = ages
ages = 10
console.log(wheel) // prints 20 to the console

let pets = {myDog: "bill"}
let dogs = pets
pets.myOtherDog = "Sam"
console.log(dogs) // prints to the console {myDog: "bill", myOtherDog: "Sam"}