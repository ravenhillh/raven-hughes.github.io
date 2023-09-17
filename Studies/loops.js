/**
 * 
 * LOOPS: Loops are a way to repeat one piece of code over and over a set number of times. There are many different 
 * types of loops, but they basically do the same thing, repeat a piece of code a certain amount of times. Different 
 * types of loops provide different ways to start and stop the looping process. Each of these different loop types
 * are more suited for particular situations. With a loop you can either iterate through a data structure, such as an
 * object or an array, or you can just use the index number of the loop to do something at each index.
 * 
 * 1. While loops are used to loop while a certain condition is true, once the condition resolves to false the 
 * loop will stop iterating. You can also use a counter n to increment and decide where to start and stop the 
 * iteration.
 * 
 * 2. For loops iterate for a certain number of times, until it meets the stopping condition. It uses an incrementer
 * to move the loop and for each index it executes the code block. Once the stopping condition resolves to true the 
 * loop stops. They can iterate through an array or just count and do something at each index.
 * 
 * 3. For-in loops are used to iterate through an object, using a specified key and object. It runs the block of code
 * at each property in the given object. The loop ends after hitting each property.
 * 
 * 4. You can loop to any point, going forward, by creating a stopping point with the stopping condition, and iterating
 * forward with i + 1. You can loop backwards starting at any point with the starting condition of given number,
 * and stopping condition of i > 0, and using i -- to increment backwards.
 * 
 * 5. Loop over an Array forwards by starting at 0, assigning i to 0, and having the loop stop at array.length. 
 * You can loop backwards setting the starting variable at array.length-1, and setting the end condition at i => 0, and
 * using a negative to decrement the counter, i --. You can loop over an object using a for- in loop
 */

//While loop
let x = 0
while (x < 5){
    console.log(x) // logs 0, 1, 2, 3, 4 to the console one at a time
    x ++
}

//For loop going forwards
for (let i = 0; i < 5; i ++){ // logs 0, 1, 2, 3, 4 to the console one at at time
    console.log(i)
}
//For loop going backwards
for (let i = 5; i >= 0; i --){
    console.log(i)         // logs 5, 4, 3, 2, 1, 0 to the console
}

//For-in loop with object
let cat = {isTabby: true, eyeColor: "yellow"}
for (var key in cat){
    console.log(cat[key]) //logs true and yellow to the console
}

//Loop forward over an array
let arr = [1, 2, 3]

for (let i = 0; i < arr.length; i ++){
    console.log(arr[i])     //prints 1, 2, 3 to the console
}

//loop backward over an array
for (let i = arr.length -1; i >= 0; i --){
    console.log(arr[i])      // logs 3, 2, 1 to the console
}
