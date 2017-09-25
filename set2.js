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

function decode(sentence) {
  const arr = sentence.split(" ")
  const decoded = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    
    if (word[0] === 'a') {
      decoded.push(word[1]);
    }

    else if (word[0] === 'b') {
      decoded.push(word[2]);
    }

    else if (word[0] === 'c') {
      decoded.push(word[3]);
    }

    else if (word[0] === 'd') {
      decoded.push(word[4]);
    }

    else {
      decoded.push(' ');
    }
  }

  return decoded.join("");
}

decode('craft block argon meter bells brown croon droop');