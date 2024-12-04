"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: steve culmer
      Date:   4 dec 24

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {

}

// Create a request object
const xhr = new XMLHttpRequest();

// Handle the changing request state
xhr.onreadystatechange = function() {
   if (xhr.readyState === 4) {
      // Manage the response
      stories.innerHTML = xhr.responseText;
   } else {
      console.log("Request failed: " + xhr.statusText);
   }
}



