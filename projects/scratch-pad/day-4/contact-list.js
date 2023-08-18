// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
let makeContact = function(id, nameFirst, nameLast) {
 
    return {
        id : id, nameFirst: nameFirst, nameLast: nameLast
    }

}
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, addContact: function(contact){
            return contacts.push(contact)
        }, findContact: function(fullName){
//write a function that will take the fullName and look for a match in the contact list
        //use a loop to look through contacts and check for match
        for (var i = 0; i < contacts.length; i ++){
//use a conditional statement to compare names 
            if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){
                //return the contact object
                return contacts[i]
            }
        } 
        }, removeContact: function(contact){
//match the contact argument with an object and delete that object
        //find the contact with a loop
        for (var i = 0; i < contacts.length; i ++){
            //use a conditional statement to compare names 
                if (contact === contacts[i]){
                    //delete the contact object
                    contacts.splice(i, 1)
                }
        }
    }, printAllContactNames: function(){
        let string1 = ""
//loop through the contact list and pull out names
for (var i = 0; i < contacts.length; i ++){
    //combine the first name and last name properties and push them into a holding variable 
        if (i === contacts.length-1){
            string1 += contacts[i].nameFirst + " " + contacts[i].nameLast
        }
        else string1 += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n"
        } return string1

    }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
