'use strict'

function jediName(firstName, lastName) {
  let partialFirst = firstName.slice(0, 2);
  let partialLast = lastName.slice(0, 3);
  return partialLast + partialFirst;
}

jediName('Beyonce','Eddie');