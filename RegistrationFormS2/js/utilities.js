// Script 8.1 - utilities.js
// This script defines an object that has some utilitarian functions.

var U = {/* Think of an object as a multipart or complex variable
            which can contain multiple pieces */
$: function (id){if (typeof id == "string"){return document.getElementById(id);}},

addEvent: function (obj, type, fn) {
            if (obj && obj.addEventListener){obj.addEventListener(type, fn, false);}
                else if (obj && obj.attachEvent){obj.attachEvent("on" + type, fn);}}};