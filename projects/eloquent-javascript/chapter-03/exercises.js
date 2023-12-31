////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function min that takes two arguments and returns their minimum.
function min(a, b) {
if (a < b){
  return a
} else return b
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Define a recursive function isEven corresponding to this description. 
//The function should accept a single parameter (a positive, whole number) and return a Boolean.
function isEven(n) {
if (n % 2 === 0) {
  return true
} else return false
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
 
    let count = 0
  for (var i = 0; i < string.length; i++){
    if (string[i] === char){
      count += 1
    }
  } return count
  }


////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function countBs that takes a string as its only argument and returns a number that indicates
 //how many uppercase “B” characters there are in the string.
function countBs(string) {
  let count = 0
for (var i = 0; i < string.length; i++){
  if (string[i] === 'B'){
    count += 1
  }
} return count
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
