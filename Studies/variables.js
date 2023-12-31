/**
 * 
 * VARIABLES: 
 * 
 * 0. Variables are used to record data and attach it to a label to have access to that data. They
 * can store any type of data, such as string, number, boolean or objects. They are called variables
 * because you can change they're values or change the type of data they point at.
 * 
 * 1. The first thing you do is create a variable or declare it with a name, and the keywords, var,
 * let or const.
 * 2. The second part step is called assignment or initialization. This is when you assign a value to 
 * the variable.
 * 3. When you declare a variable you can use var, let or const. With var you declare a variable
 * in the function scope or the global scope. With let or const, they are declared with block
 * scope or global scope. With let and var you can reassign the value of a variable, with
 * const the value cannot be reassigned.
 * 4. Hoisting is what happens when your code is executed. The computer pulls all function
 * declarations and variables to the top of the code. Let and const declarations
 * are hoisted but not initialized, which means they cannot be used until they're declared.
 */

//Declaration
//Declaration is when you create a variable and name it, but without assigning it a value.
var myDog
console.log(myDog) //prints undefined, because variable has no value yet

//Initialization or Assignment
//Assignment or initialization is when you assign a value to your variable.

var myDog = "Burt"
console.log(myDog) //prints Burt to the console

//Re-assignment
//When you change the value of a variable.

var myDog = "Sally"
console.log(myDog) // logs Sally to the console 

//var, let, const

var myCat = "buddy"
var myCat = "Buster"
console.log(myCat) // logs Buster to the console, because var was redeclared

let myName = "Raven"
let myName = "Ray" // It will not allow this, since let vars cannot be declared again

const lastName = "Hughes"
lastName = "Smith"
console.log(lastName) // logs Hughes to the console, because you cannot reassign const

//Hoisting
add(3, 5)   //returns 8, since function declarations are hoisted they can be invoked before
            //they are declared

function add(x, y){
    return x + y
}