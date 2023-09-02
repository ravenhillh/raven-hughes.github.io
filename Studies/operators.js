/**
 * 
 * OPERATORS: 
 * 
 * 0. Operators are tools we use in javascript to relate two pieces of data, or compare them
 * or assign one to a variable. There are many different types of operators. Most require two operands
 * to work with, but some one or three.
 * 
 * 1. Assignment operators assign the value on the right side to the variable on the left side.
 * They can also add, multipy, subtract or divide the variable.
 * 2. Arithmatic operators are used to do math on numbers, such as adding or subtracting them.
 * 3. Comparison operator are used to compare two values, to see if they're equal or compare how 
 * they are different. Sometimes they compare strictly or loosely. They return a boolean value.
 * 4. Logical operators are include &&, || and !, they are used to relate two expressions which will be resolved to a boolean
 * value.
 * 5. Unary operators are operators with only one operand. This operand can sometimes come before or after the operand.
 * 6. Ternary operator is the only operator in javascript that takes three operands. It begins with a condition and then a
 * question mark, and then an expression to execute if the conditions is truthy, then a colon and a final expression to 
 * execute if the condition is falsy.
 */

//Assignment operators
var myCat = "buddy"
console.log(myCat) // prints buddy to the console

//Arithmatic operators
var num = 3 - 2
console.log(num) //prints 1 to the console

//Comparison operators
if (10 > 5){
    console.log("true") // prints true to the console because the condition resolved to true
}
//Logical operators
if (3 > 1 && a > d){
    console.log('true') // prints the console because both expression resolved to true
}
//Unary operators
let a = 1;
let b = a++;
console.log(b) // logs 2 to the console 

//Ternary operator
array[i] === 'bob' ? true : false; // would print true if array[i] was equal to bob and false if not
