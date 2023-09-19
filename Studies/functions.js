/**
 * FUNCTIONS: 
 * A function is a piece of code designed to perform a particular task. First you must declare a function with the 
 * keyword function, then name the function, and then put parentheses, in which you can place parameters. Next you
 * place the code block within curly braces, this is where you write your code that will perform the function's task.
 * Now that you have created the function or defined it, you can invoke or call the function. This is done by
 * writing the name of the function followed by parentheses, which will hold the arguments you are passing in
 * to the function.
 * 
 * 
 * 
 * 1. When you define a function you create how ever many parameters it may need, inside the parentheses, these are 
 * basically placeholders, which are named so that you have an idea what the function input it, such as num1 and num2.
 * When you invoke a function you pass in the arguments that you would like to use as input for your function, they
 * are going to be used within the function, it could be numbers or a string or object, or even another function.
 * 
 * 2. A named function is written by first putting the function keyword and then the name of the function, then
 * parentheses, with some or no parameters, and then curly braces, in which your code block will go.
 * 
 * 3. If we want to assign a function to a variable we can just say let or const and the name of the function is 
 * equal to function and then put our parentheses, with parameters, and then put curly braces, with the code block
 * inside.
 * 
 * 4. Functions can take inputs, they are passed in as arguments to the function. Functions can return a value, this
 * is done with a return statement at the end of our code block, which specifies what will be returned.
 * 
 * 5. Scope can exist at the function level or at the global level. Function scoped variables have access to the parent
 * scope, either within an outer function or at the global level, but the global scope can not reach within the 
 * function scope.
 * 
 * 
 * 6. Closures: Functions form closures around the data they house. If an object returned from the Function and 
 * is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these 
 * closures! 
 */

//Function declaration and execution
function myName(){                  //Function declaration
    console.log("My name is Raven")
}
myName()                            //Function execution, logs My name is Raven to the console

//Function parameters vs. arguments
function add(x, y){                 //parameters are placed in parentheses when defining a function
    return x + y
}
let result = add(1, 5)              //arguments are passed into the function when invoking
console.log(result)                 // logs 6 go the console

//Named function
function myLastName(){              //This is a named function
    console.log("My last name is Hughes")
}
myLastName()                        //Logs My last name is Hughes to the console

//Function expression
let cats = function(num){
    console.log("I have " + num + " cats")
}
cats(2)                             //logs I have 2 cats to the console

//Inputs and outputs
function multiply(x, y){   
    return x * y                    //your return statement is where the function is creating output
}
let answer = multiply(5, 5)         //these are the function inputs
console.log(answer)                 //your output is stored in the answer variable, which prints as 25 to the console

//Scope - function vs. global
let a = 20                         //global scope
function minus(num1){               
let a = 5                           //function scope
return num1 - a 
}
let number = minus(10)
console.log(number)                 //logs 5 to the console, because the the variable in the function is accessed
console.log(a)                      //logs 20 to the console, because it is not reaching inside the function scope

//Closure 
function breadRecipe(flour){
    let salt = .01
    function saltRatio(flour){
 return salt * flour                //closure is happening here when the inner function is holding onto the variable from 
    }                               //the parent function.
    saltRatio()
}
