// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./raven-hughes.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, function(customer){
   if(customer.gender === 'male'){
    return true
   }
})
return males.length
};

var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current){
        //checking if the object at current index has a gender val equal to female
        if (current.gender === 'female'){
            //if the value is true then adding 1 to the accumulator counter
            accumulator += 1
        }
        return accumulator
    }, 0) 
    return females
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        //compare the age of accumulator and current
        if (current.age > accumulator.age){
            // if the age is greater than set the output variable to that object
            return current
            //else set the variable to the currant object
        } else {
            return accumulator
        }
            //after the loop is done return the name value on the object with the greatest age
        
    })
    return oldest.name
}

var youngestCustomer = function(array){
    let youngest  = _.reduce(array, function(accumulator, current){
        //compare the age of accumulator and current
        if (current.age < accumulator.age){
            // if the age is greater than set the output variable to that object
            return current
            //else set the variable to the currant object
        } else {
            return accumulator
        }
            //after the loop is done return the name value on the object with the greatest age
        
    })
    return youngest.name
}
var averageBalance;

var firstLetterCount = function(array, char){
    let letterCounter =_.reduce(array, function(accumulator, current){
        
        if (current.name[0].toLowerCase() === char.toLowerCase()){
            accumulator += 1
        }
        return accumulator
    }, 0)
    return letterCounter
}

var friendFirstLetterCount = function(array, customer, letter){
    let friendLetterCounter =_.filter(array, function(){
        
        if (customer.friends.name[0].toLowerCase() === letter.toLowerCase()){
            return true
            }
        })
        
            return friendLetterCounter.length
        };

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
