"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Steve Culmer
      Date:   16 dec 24

      Filename: project12-03.js
*/

// Run once the page is loaded and ready
$( () => {

  // Animate the h2 heading
  $("section > h2").css({
    fontsize: 0,
    opacity: 0
  })
  .animate({
    fontsize: "2.3em",
    opacity: 1
  }, 600);

  // Add click events to each ingredients in the lists
  $("dl#faq dt").click( e => {

    // Alternate between hiding and showing the answer
    let ingredients = $(e.target);
    let answer = $(ingredients.next());

    $(ingredients).toggleClass("hiddenAnswer");

    if  ($(ingredients).hasClass("hiddenAnswer")) {
      $(answer).slideUp(600);
    } else {
      $(answer).slideDown(600);



})


