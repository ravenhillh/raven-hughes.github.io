
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {
//Write a loop that makes seven calls to console.log to output the following triangle
//make a string variable to hold the values to be printed
var triangle = ""
//make a loop to generate and print the values
for (var i = 0; i < 7; i ++){
  //make a statement to add values to variable a
  triangle += "#";
  console.log(triangle)
  //make a statement to log the variable
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
 /*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
 For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3),
  print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

  //writing a for loop to count from 1 to 100
  for (var i = 1; i <= 100; i++){
  //writing an if-else if statement to print each output correctly
      if (i % 3 === 0 && i % 5 === 0){
          console.log("fizzbuzz")
      } else if (i % 3 === 0){
          console.log("fizz")
      } else if (i % 5 === 0){
          console.log("buzz")
      } else console.log(i)
      // YOUR CODE GOES ABOVE HERE //
  }
   } 


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {
  //writing a variable to store the characters
  var chess = " "
  //make a loop to count the lenght of the line and create newline 
  for (var i = 0; i <= chess.length; i ++){
  //check if the line is 8 or a factor of 8 long
    if (chess.length % 8 === 0){
    //start a new line
    console.log("\n");
      //loop to print the characters
      for (var i = 0; i < 8; i ++){
        //if it's an odd number than add a #
        if (chess.length % 2 !== 0){
        chess = chess + "#"
        console.log(chess)
          //if it's an even number than add a space
      }   else if (chess.length % 2 === 0){
        chess += " "
        console.log(chess)
      }
    }    
    } 
  }
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
