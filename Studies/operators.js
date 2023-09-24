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
// += operator
let x = 10
console.log (x += 2) //logs 12 to the console
// -= operator
console.log(x -= 5) //logs 5 to the console
// *= operator
console.log(x *= 2) //logs 20 to the console
// /= operator
console.log(x /= 5) //logs 2 to the console

//Arithmatic operators
// - operator
var num = 3 - 2
console.log(num) //prints 1 to the console
// + operator
console.log(num + 2) //logs 3 to the console
// * operator
console.log(10 * 10) //logs 100 to the console
// / operator
console.log (10 / 5) //logs 2 to the console
// % operator
console.log(20 % 3) //logs 2 to the console, the remainder of 20/3 = 18 remainder 2
// ++ operator
console.log(5 ++) //logs 6 to the console
// -- operator
console.log(10 --) //logs 9 to the console
// ** operator
console.log(5 ** 2) //logs 25 to the console


//Comparison operators
// == operator
r = 5
l = "5"
console.log(r == l) //logs true to the console, since it checks value and not type
// === strict operator
console.log(r === l) //logs false to the console, since it checks value and type
// != operator
console.log(r != l) //logs false to the console
// !== operator
console.log(r !== l)//logs true to the console
// > operator
if (10 > 5){
    console.log("true") // prints true to the console because the condition resolved to true
}
// < operator
console.log (10 < 5)  //logs false to the console
// <= operator
console.log (5 <= 10) //logs true to the console
// >= operator
console.log (5 >= 5) //logs true to the console

//Logical operators
let c = 5
let d = 2
// && operator
if (3 > 1 && c > d){
    console.log('true') // prints the console because both expression resolved to true
}
// || operator
if (c === 7 || d === 2){
    console.log('true') // logs true to the console, because one expression is true
}
// ! operator
console.log(!(c === d)) //logs true to the console

//Unary operators
let a = 1;
let b = a++;
console.log(b) // logs 2 to the console 

//Ternary operator
array[i] === 'bob' ? true : false; // would print true if array[i] was equal to bob and false if not
