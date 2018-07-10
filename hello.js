// Author: Anthony Carlos

let readLine = require('readline-sync');

let ageAsAString = readLine.question('What is your age?');

let age = Number(ageAsAString);

console.log('In 2028 you will be ' + (age + 10) + ' years old.');
// console.log("Hello World!");
// console.log('I am another line');
// console.log("Aaaaaaron is chill");
// console.log("This place is cool?");
