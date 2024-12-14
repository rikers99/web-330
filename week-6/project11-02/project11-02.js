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

// Open the request and send it
xhr.open("get", "https://github.com/rikers99/web-330/blob/master/week-6/project11-02/project11-02.html");
xhr.send(null);

// Retrieve postal codes from the web server
sButton.onclick = () +> {
   fetch("project11-02.html$key=" + encodeURIComponent(sInput.value))
   .then ( response => {
      if  (response.ok) {
         return response.text();
      } else {
         return "Unable to retrieve postal codes";
      }
   })
   .then ( context => stories.innerHTML = context )
   .catch (postalCode.innerHTML = "Network Failure");
}

// Fetch postal codes from the web server
fetch("postalCode.xml")
.then (response => response.text())
.then (str => new DOMParser().parseFromString(str, "text/xml"))

// Write the xml content to HTML
.then (dom => {
  let items = dom.querySelectorAll("item");
  // Loop through each story item
  for (let postalCode of items) {
     // Write the story content and append it to the page
     let postalCode = postalCode.children[0].textContent;
     let place = place.children[1].textContent;
     let region = region.children[2].textContent;
  })
});

}





