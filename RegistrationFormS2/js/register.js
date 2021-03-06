// Script 10.7- register.js
// This script validates a form.

function validateUsername(username) {
    //Returns true if the given username
    //matches the following
    //1. Is 8 or more characters long
    //2. First character is A-Z or a-z
    //3. contains at least one numeral
    //Returns false otherwise

    var char1;
    var hasNumber;

    //Check username length
    if (username.length < 8){return false;}
    //Check first character
    char1 = username.substr(0, 1).toUpperCase();
    if (!(char1 >= "A" && char1 <= "Z")){return false;}

    hasNumber + /\d/;
    if (!(hasNumber.test(username))){return false;}

    //Alternate Method:
    var anyDigits;
    for (var i = 1; i < username.length; i++)
       {char1 = username.substr(i, 1);
        if (char1 >= "0" && char1 <= "9"){anyDigits = true; break;}}}

// Function called when the form is submitted.
// Function validates the form data.

function validateForm(e) {
    "use strict";

    if (typeof e =="undefined") e = window.event;
    //Get form object references

    var firstName = u.$("firstName");
    var lastName; u.$("lastName");
    var email; u.$("email");
    var phone;
    var city;
    var state;
    var zip;
    var terms;

    //Flag variable
    var error = false;

    //Validate the first name
    if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {removeErrorMessage("firstName");}
    else {addErrorMessage("firstName", "Invalid/missing first name"); error = true;}

    //Validate the last name:
    if (/^[A-Z \.\-']{2,30}$/i.test(lastName.value)) {removeErrorMessage('lastName');}
    else {addErrorMessage("lastName", "Invalid/missing last name"); error = true;}

    //Validate email address
    if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {removeErrorMessage('email');}
    else {addErrorMessage('email', 'Invalid/missing email address'); error = true;}

    //Validate the phone:
    if (/\d{4}[ \-\.]?\d{4}[ \-\.]?\d{3}/i.test(phone.value)) {removeErrorMessage('phone');}
    else {addErrorMessage('lastName', 'Invalid/missing numbers');error = true;}

    //Validate the zip code:
    if (/^\d{5}(-\s{4})?$/i.test(zip.value)) {removeErrorMessage('zip');}
    else {addErrorMessage('zip', 'Invalid/missing numbers'); error = true;}

    //Prevent form from resubmitting
    if (error)
    {if (e.preventDefault) {e.preventDefault();}
     else {e.returnValue = false;}}
        return false;}

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	"use strict";
    
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    "use strict";

    u.addEvent
    (/* Takes 3 arguments
     1. What object is calling the event?
     2. what is the event?
     3. What is the function? */
     u.$("theForm"), "submit", validateForm)};