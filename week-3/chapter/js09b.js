"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case

      Eating Well in Season
      Author: Steve Culmer
<<<<<<< HEAD
      Date:   6 nov 24

      Filename: js09b.js
 */
=======
      Date:   7 nov 24

      Filename: js09b.js
 */

      // Retrieve the text of the query string
      let qString = location.search.slice(1);

      // Replace the encoded characters in the query string
      qString = qString.replace(/\+/g, " ");
      qString = decodeURIComponent(qString);

      console.log(qString);
>>>>>>> 8b19f7b61358a7db81ea2a5e29fc2d6acf8a2e02
