'use strict'

function yearOfBirth(age) {
  
  return 2017 - age;
  
}

function whoAmI(name, age) {
  let yob = yearOfBirth(age);
  if (age < 0) {
    throw new Error('Age cannnot be negative');
  }

  
    console.log(`Hi, my name is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yob}`)
}

try {
  whoAmI('Quang', -5);
}
catch(e) {
  console.error(e.message);
}

