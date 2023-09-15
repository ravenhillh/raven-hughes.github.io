// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array
// that has all the elements of the original arrays.
function flatten(array) {
  newArray = array.reduce(function(acc, curr){
acc.push(curr)
return acc
  }, [])
  
let goodArray = newArray[0].concat(newArray[1], newArray[2])
  return goodArray
}
		


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Write a higher-order function loop that provides something like a for loop statement. It takes a value, 
//a test function, an update function, and a body function. Each iteration, it first runs the test function 
//on the current loop value and stops if that returns false. Then it calls the body function, giving it 
//the current value. Finally, it calls the update function to create a new value and starts from the beginning.

function loop(value, test, update, body) {
  //loop thru input values
for (let i = value ; test(i); i = update(i)){
  body(i);
  //update the value to create a new value
  
}
}



// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every() {

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  let ltr = []
  let rtl = []
for (let i = 0; i < string.length; i ++){
  let script = characterScript(string.charCodeAt(i))

  if (script !== null){

    if(script.direction === "ltr"){
ltr.push(script)
    } else{
      rtl.push(script)
    }
  }
}
if (ltr.length > rtl.length){
  return "ltr"
} else {
  return 'rtl'
}
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
