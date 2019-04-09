/* eslint-disable no-undef */
'use strict';

const description = ['a full-stack web developer', 'Bob Nearents', 'a cat enthusiast', 'a husband', 'a dad'];
//randomly fill a queue with 'description' and display that way instead.
//It will still be random but will avoid duplicates in a cycle
setInterval(function () {
  let i = Math.round((Math.random()) * description.length);
  if (i === description.length)--i;
  $('.personal-description').html(description[i]);
}, 3000);