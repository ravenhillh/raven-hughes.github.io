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
var averageBalance = function(array){
    //Find the average balance of all customers
let balance = _.map(array, function(customer){
    //taking the balance and removing the other characters and turning it into a number
    return parseFloat(customer.balance.replace(/[$||,]/g, ""))
})
    let avg = 0;
    balance.forEach(function(num){
        avg += num
    })
    let final = (avg / balance.length)
    return final
}

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
    let friendLetterCounter =_.reduce(array, function(accumulator, current){
        
        if (current.friends.name[0].toLowerCase() === letter.toLowerCase()){
            accumulator += 1
        }
        return accumulator
    }, 0)
    return friendLetterCounter
}

var friendsCount = function(array, name){
//Find the customers' names that have a given customer's name in their friends list
friends2 = _.filter(array, function(array){
    if(array.friends.name === name) return true
})
return friends2
}
var topThreeTags = function(array){}
    //Find the three most common tags among all customers' associated tags


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
