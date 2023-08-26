//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//take the values and push them into an array
//declare an array variable
var arr = []
//loop through and pull values out 
for (var key in object){
    arr.push(object[key])
} return arr
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//create a variable to store string
var str = ""
var arr= []
//create a loop to pull out values
for (var key in object){
    arr.push([key])
} 
str = arr.join(" ")
return str
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//take an object and return all its string values in a string each separated with a space
//create a variable to store string
var str = ""
var arr= []
//create a loop to pull out values
for (var key in object){
    if (typeof object[key] === "string"){
    arr.push(object[key])
    }
} 
str = arr.join(" ")
return str
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //Should take one argument and return 'array' if its an array and 'object' if its an object
    if (Array.isArray(collection) === true){
        return "array"
    } else return "object"
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //Should take a string of one word, and return the word with its first letter capitalized
   first = string[0].toUpperCase();
        second = string.slice(1, string.length);
        return first + second
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //Should take a string of words and return a string with all the words capitalized
    myArray = string.split(" ")
    newArray = []
    var newString = ""
    //loop thru array to pull words and capitolize
    for (var i = 0; i < myArray.length; i ++){
        first = myArray[i][0].toUpperCase();
        second = myArray[i].slice(1, string.length);
        newArray.push(first + second);
    }   newString = newArray.join(" ");
     return newString
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//Should take an object with a name property and return 'Welcome <Name>!
var newName 
first = object["name"][0].toUpperCase();
      second = object["name"].slice(1, object["name"].length);
      newName = first + second
return "Welcome " + newName + "!"

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //Should take an object with a name and a species and return '<Name> is a <Species>
    var newName 
    first = object["name"][0].toUpperCase();
          second = object["name"].slice(1);
          newName = first + second
    var newSpecies 
    first = object["species"][0].toUpperCase();
      second = object["species"].slice(1);
      newSpecies = first + second
    return newName + " is a " + newSpecies
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//Should take an object, if this object has a noises array return them as a string separated by a space
//create a var to store the new strings
var string = ""
//check if object is empty or has empty array
if (Object.keys(object).length === 0 || object.noises.length === 0 ){
   //if there are no noises return 'there are no noises'
    return "there are no noises"
} else if (object.hasOwnProperty("noises") === true){
    string = object.noises.join(" ")

    } return string
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
/*Should take a string of words and a word and return true if <word> is in <string of words>,
 otherwise return false*/
//use .include to check if the word is in the string
if (string.includes(word) === true){
return true
}  else return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
/*Should take a name and an object and add the name to the object's
 friends array then return the object*/
 object.friends.push(name)
 return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
/*Should take a name and an object and return true if <name> is a friend of <object> and
 false otherwise*/
 //use the includes method to check if name is in friends object
 if (Object.keys(object).length === 0 || object.friends.includes(name) === false){
    return false
 } else if (object.friends.includes(name) === true){
    return true
} 
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Should take a name and a list of people, and return a list of all the names that
 <name> is not friends with*/

function nonFriends(name, array) {
    //create a variable to return the nonfriends
    let notFriends = []
    //loop through each object and check if name is listed on the friends array
 for (var i = 0; i < array.length; i ++){
    if (array[i].name === name) {}
   else if (array[i].friends.includes(name) === false){
        notFriends.push(array[i].name)
    }
 } return notFriends


}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
/*Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
If <key> does not exist on <object> create it.*/
//creating a copy to store a new version of object
      let copiedObject = object;
      //adding or changing the key and value
        copiedObject[key] = value;
        //reassigning the value of the old object to the new object
          object = copiedObject;
          return object
    }


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
let obj1 = object
    for (var key in obj1){
        if(obj1[key] === array.includes([key])){
    obj1.splice(key, 1)
    }
        } 
object = obj1;

}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}