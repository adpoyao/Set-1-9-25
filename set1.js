'use strict'

function yearOfBirth(age) {
  
  return 2017 - age;
  
}

function whoAmI(name, age) {
  let yob = yearOfBirth(age);

  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid.')
  }
  
  if (typeof name !== 'string' || typeof age === NaN) {
    throw new Error('Name must be a string and age must be a number.')
  }
  
  if (age < 0) {
    throw new Error('Age cannnot be negative');
  }

  
    console.log(`Hi, my name is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yob}`)
}

try {
  whoAmI(27, 'Quang');
}
catch(e) {
  console.error(e.message);
}

