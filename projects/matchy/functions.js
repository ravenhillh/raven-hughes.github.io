/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, string){
    for (var i = 0; i < animals.length; i ++){
        if (string === animals[i]["name"]){
            return animals[i]["name"]
        } else return null
    }
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write a function replace
function replace(animals, name, replacement){
    for (var i = 0; i < animals.length; i ++){
        if (name === animals[i]["name"]){
            animals[i] = replacement
}
    }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for (var i = 0; i < animals.length; i ++){
        if (name === animals[i]["name"]){
            animals.splice(i, 1)
}
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    //Checks that the animal Object has a `name` property with a length > 0.
    if (animal.name.length > 0){
        //Checks that the animal Object has a `species` property with a length > 0.
        if (animal.species.length > 0){
            //Has a **unique** name, meaning no other animals have that name.
        } for (var i = 0; i < animals.length; i ++){
            //check that the new object name doesn't match one already on the array
            if (animals[i].name === animal.name)
        }
    }
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
