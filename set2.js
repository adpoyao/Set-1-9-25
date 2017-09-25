'use strict'

function jediName(firstName, lastName) {
  let partialFirst = firstName.slice(0, 2);
  let partialLast = lastName.slice(0, 3);
  return partialLast + partialFirst;
}

jediName('Beyonce','Eddie');

function beyond(num) {
  if(num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
    console.log('and beyond')
    ;} 
  else if(Number.isFinite(num) && num > 0) {
    console.log('To Inifinity')
    ;}
  else if(Number.isFinite(num) && num < 0) {
    console.log('To Negative')
    ;}
  else if(num === 0) {
    console.log('staying home');
  }
}

beyond(-0);