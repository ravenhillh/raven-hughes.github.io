
/**
 * 
 * CONTROL-FLOW: Control flow is the order that a code is executed by the computer. The code runs starting at the top
 * and running down through to the bottom. Depending on what is in the code certain things will change the order, such
 * as loops and conditionals. Loops can change how your code runs, by repeating segments of code until a stopping condition
 * is met or the thing you're looping through ends. Conditional statements can change how your code executes, because
 * whenever you hit one it affects whether or not a block of code runs. Functions can also change the order your code
 * executes.
 * 
 * 1. If statements start with the keyword if, and then inside you place a condition. After that you open curly braces
 * and inside those you write the code block. If the condition resolves to truthy the code block will execute. If it
 * resolves to falsey, the code will not execute.
 * 
 * 2. An else if statement follows an if statement. If the if statement does not execute, then the code will move on
 * to the else if statement and check if that condition resolves to truthy, and execute the code block if so.
 * 
 * 3. The else if statement happens at the end of a conditional chain. Else statements are different in that they do
 * not need a condition, if you hit the else statement it will automatically run the connected code block. The else
 * statement is used to run something if no other condition is met.
 * 
 * 4. A switch statement is used if you have many different conditions that could be, and you want to create an
 * option for each possibility. First you put the keyword switch and then an input parameter in parentheses. Then you
 * put case and the condition for that case, such as "red". After that you put a return statement with the code you
 * want to execute, and then a break statement to make the switch statement stop.
 * 
 */

//If statement
var num = 1
if (num < 5) {
    return true // returns true
}
//Else if statement
var array = [1, 2]
else if(array.length > 5){
    return false        //returns false
}

//Else statement
else {
    console.log("Hello") // Once the else statement is hit, logs Hello to the console
}
//Switch statement
var num = 83
Switch(num){
    case 1: 
    console.log("Hey")
    break;
    case 83:
    console.log("yo yo")       //logs yo yo to the console
    break;
    default:
    console.log("Bye")
}
