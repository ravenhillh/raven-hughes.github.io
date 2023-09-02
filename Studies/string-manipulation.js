/**
 * 
 * STRING-MANIPULATION:
 * 0. String manipulation relates to diffent methods we use to modify a string value. A string in javascript is any bit of 
 * text that we wrap within quotation marks. They can include characters, numbers and Unicode. There are many functions and methods
 * that are built in to javascript to modify strings. Strings are immutable so when modifying the string you have to create
 * a new version of the string with the changes.
 * 
 * 1. You can manipulate a string with operators. For example, you can add two strings together with the "+" sign. This is 
 * called string concatenation.
 * 
 * 2.With string methods you can use built in methods to manipulate the string into something new. Some methods take the string
 * and change it into an array, such as the split method. Some methods can check for the contents of a string, such as the
 * includes method, or the endsWith method.
 */

//String manipulation with operators
let string1 = "Sup";
let string2 = " Dawg";
console.log(string1 + string2) // prints to the console Sup Dawg

//String manipulation with string methods
//1. String manipulation with .split
let string3 = "Hey there";
let array1 = string3.split(",");
console.log(array1) // prints [H, e, y, t, h, e, r, e]

//2. String manipulation with .padStart
let string = "Raven".padStart(10, 0)
console.log(string) // prints to the console 00000Raven

//3. String manipulation with .toUpperCase
let word = "computer";
let up = word[0].toUpperCase();
console.log(up) // prints C to the console